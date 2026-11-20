const test = require('node:test');
const assert = require('node:assert/strict');
const {
  MAX_CLAPS,
  containsProhibitedLanguage,
  getClapStatus,
  isValidClientId,
  storyStorageKey,
  validateComment
} = require('../assets/Javascript/pages/field-stories-interactions');

test('uses the documented per-story Claps limit', () => {
  assert.equal(MAX_CLAPS, 50);
});

test('explains that the Claps limit was reached on the final allowed Clap', () => {
  assert.deepEqual(getClapStatus(50), {
    status: 'neutral',
    indonesian: 'Batas 50 tepuk tangan untuk cerita ini telah tercapai.',
    english: 'The 50-Clap limit for this story has been reached.'
  });
});

test('confirms a Clap below the limit as a success', () => {
  assert.deepEqual(getClapStatus(49, true), {
    status: 'success',
    indonesian: 'Tepuk tangan berhasil dikirim.',
    english: 'Your Clap was added.'
  });
});

test('keeps the reaction status clear while loading below the limit', () => {
  assert.deepEqual(getClapStatus(49), {
    status: 'neutral',
    indonesian: '',
    english: ''
  });
});

test('trims a valid display name and comment before submission', () => {
  assert.deepEqual(validateComment('  Ada Lovelace  ', '  Terus semangat!  '), {
    valid: true,
    authorName: 'Ada Lovelace',
    commentText: 'Terus semangat!'
  });
});

test('rejects empty values and comments beyond the database limit', () => {
  assert.equal(validateComment('   ', 'Semangat!').reason, 'name-required');
  assert.equal(validateComment('Ada', '   ').reason, 'comment-required');
  assert.equal(validateComment('Ada', 'x'.repeat(1001)).reason, 'comment-too-long');
});

test('matches punctuation and spacing variants without substring false positives', () => {
  assert.equal(containsProhibitedLanguage('f.u.c.k'), true);
  assert.equal(containsProhibitedLanguage('f u c k'), true);
  assert.equal(containsProhibitedLanguage('A classroom full of books'), false);
});

test('accepts only UUID-shaped client IDs and uses feature-specific storage keys', () => {
  assert.equal(isValidClientId('b6f178c8-2939-4e61-86b0-3b3e70da2601'), true);
  assert.equal(isValidClientId('not-a-client-id'), false);
  assert.equal(storyStorageKey('claps', '501'), 'heyYouth:fieldStories:claps:v1:501');
});
