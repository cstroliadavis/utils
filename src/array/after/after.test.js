import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import after from './after.js';

describe('array:after', () => {
  it('returns the elements after the specified index', () => {
    const array = [1, 2, 3, 4, 5];
    const result = after(array, 2);
    assert.deepEqual(result, [3,4,5]);
  });

  it('returns all elements that come after the first element that is after a string', () => {
    const array = ['m', 'a', 'k', 'o', 'd', 'y', 'k', 'e'];
    const result = after(array, 'm');
    assert.deepEqual(result, ['o', 'd', 'y', 'k', 'e']);
  });

  it('returns all elements that come after the first larger value using a compare function', () => {
    const array = [{ a: 1, b: 5 }, { a: 1, b: 2 }, { a: 7, b: 20 }, { a: 10, b: 3 }];
    const compare = ({b: first}, {b: second}) => first - second;
    const result = after(array, compare, { b: 5 });
    assert.deepEqual(result,  [{ a: 7, b: 20 }, { a: 10, b: 3 }]);
  });
});
