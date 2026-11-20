const { spawnSync } = require('node:child_process');
const path = require('node:path');

const DEPENDENCY_POLICY = Object.freeze({
  baseline: 5,
  warnThrough: '2026-12-05'
});

function evaluateAudit(report, policy) {
  const vulnerabilities = report && report.metadata && report.metadata.vulnerabilities;
  if (!vulnerabilities) {
    throw new Error('npm audit did not return vulnerability counts.');
  }

  const highCritical = Number(vulnerabilities.high || 0) + Number(vulnerabilities.critical || 0);
  if (!Number.isFinite(highCritical)) {
    throw new Error('npm audit returned invalid vulnerability counts.');
  }

  if (highCritical > policy.baseline && policy.today > policy.warnThrough) {
    return { status: 'failure', highCritical };
  }

  if (highCritical > 0) {
    return { status: 'warning', highCritical };
  }

  return { status: 'pass', highCritical };
}

function run() {
  const projectRoot = path.resolve(__dirname, '..');
  const policy = DEPENDENCY_POLICY;
  const result = spawnSync('npm', ['audit', '--json'], {
    cwd: projectRoot,
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024
  });

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0 && result.status !== 1) {
    throw new Error(`npm audit could not complete (exit ${result.status}).`);
  }

  let report;
  try {
    report = JSON.parse(result.stdout);
  } catch (error) {
    throw new Error(`Could not parse npm audit output: ${error.message}`);
  }

  const counts = report.metadata.vulnerabilities;
  const outcome = evaluateAudit(report, {
    ...policy,
    today: new Date().toISOString().slice(0, 10)
  });
  const summary = `npm audit: ${counts.critical || 0} critical, ${counts.high || 0} high, ${counts.moderate || 0} moderate, ${counts.low || 0} low, ${counts.info || 0} informational.`;

  if (outcome.status === 'failure') {
    console.error(`[FAIL] ${summary} High + critical exceeds the baseline of ${policy.baseline}.`);
    process.exitCode = 1;
    return;
  }
  if (outcome.status === 'warning') {
    console.warn(`[WARN] ${summary} The high + critical baseline is ${policy.baseline}; findings are warning-only through ${policy.warnThrough}.`);
    return;
  }

  console.log(`[PASS] ${summary}`);
}

if (require.main === module) {
  try {
    run();
  } catch (error) {
    console.error(`[ERROR] ${error.message}`);
    process.exitCode = 2;
  }
}

module.exports = { DEPENDENCY_POLICY, evaluateAudit };
