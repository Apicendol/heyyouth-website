const test = require('node:test');
const assert = require('node:assert/strict');
const { buildTargetRedirectUrl } = require('../api/share');

test('redirects shared Field Stories to their detail modal on the existing page', () => {
  const target = new URL(buildTargetRedirectUrl('https://heyyouth.org', 'story', '501'));

  assert.equal(target.pathname, '/pages/about-us.html');
  assert.equal(target.searchParams.get('story'), '501');
  assert.equal(target.hash, '#field-stories');
});

test('keeps activity shares on the existing activity detail route', () => {
  const target = new URL(buildTargetRedirectUrl('https://heyyouth.org', 'activity', '301'));

  assert.equal(target.pathname, '/pages/activity-detail.html');
  assert.equal(target.searchParams.get('id'), '301');
});
