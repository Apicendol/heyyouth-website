const test = require('node:test');
const assert = require('node:assert/strict');
const { DEPENDENCY_POLICY, evaluateAudit } = require('../scripts/check-dependency-audit');

function auditReport(high, critical, moderate = 0) {
  return {
    metadata: {
      vulnerabilities: {
        info: 0,
        low: 0,
        moderate,
        high,
        critical,
        total: high + critical + moderate
      }
    }
  };
}

test('keeps the measured dependency audit policy without a separate constraints file', () => {
  assert.deepEqual(DEPENDENCY_POLICY, {
    baseline: 5,
    warnThrough: '2026-12-05'
  });
});

test('accepts the measured high and critical baseline', () => {
  const result = evaluateAudit(auditReport(4, 1), {
    baseline: 5,
    warnThrough: '2026-12-05',
    today: '2026-11-21'
  });

  assert.equal(result.status, 'warning');
  assert.equal(result.highCritical, 5);
});

test('warns rather than blocks for an increase during the grace period', () => {
  const result = evaluateAudit(auditReport(5, 1), {
    baseline: 5,
    warnThrough: '2026-12-05',
    today: '2026-11-21'
  });

  assert.equal(result.status, 'warning');
  assert.equal(result.highCritical, 6);
});

test('blocks an increase after the grace period', () => {
  const result = evaluateAudit(auditReport(5, 1), {
    baseline: 5,
    warnThrough: '2026-12-05',
    today: '2026-12-06'
  });

  assert.equal(result.status, 'failure');
});

test('moderate findings do not change the high and critical baseline', () => {
  const result = evaluateAudit(auditReport(4, 1, 20), {
    baseline: 5,
    warnThrough: '2026-12-05',
    today: '2026-11-21'
  });

  assert.equal(result.status, 'warning');
  assert.equal(result.highCritical, 5);
});
