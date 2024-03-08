import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import toChar from './to-char.js';

describe('number:toChar', () => {
  it('returns a unicode character based on the number provided', () => {
    assert.equal(toChar(128170), '💪')
    assert.equal(toChar(128578),'🙂');
  });
});
