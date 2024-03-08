import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import toDate from './to-date.js';

describe('number:toDate', () => {
  it('returns a date from the number provided', () => {
    assert.deepEqual(toDate(1751692225987), new Date('2025-07-05T05:10:25.987Z'))
    assert.deepEqual(toDate(1568560805123), new Date('2019-09-15T15:20:05.123Z'));
  });
});
