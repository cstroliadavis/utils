const OVERLOAD = {
  number: (array, number) => array.slice(number),
  string: (array, string) => array.slice(array.findIndex((value) => value > string)),
  'function': (array, fn, comp) => array.slice(array.findIndex((value) => fn(value, comp) > 0)),
};


/**
 * Gets all items in the array that come after the index or value.
 *
 *  If value is a number, this will be treated as an item number. All values that come after that
 *  item will be returned.
 *
 *  example: `after([1, 2, 3, 4, 5], 3)` will return `[4, 5]`
 *
 *  If the value is a string, starting at the first value that comes after that string (as if sorted
 *  by string), all the remaining values will be returned.
 *
 *  example: `after(['d', 'c', 'a', 'm', 'b', 'j'], 'k')` would return `['m', 'b', 'j']`
 *
 *  Finally, if the value is a sort function (same signature used for the array sort method), then
 *  this will take a 3rd argument for the value, and once the first value in the array is found that
 *  comes after the target value, that and the remainder of the array will be returned.
 *
 *  example:
 *  ```js
 *  const sort = ({ x: a }, { x: b }) => a - b;
 *  const newArr = after({a: 'bye', x: 5 }, {a: 'stuff', x: 8}, {a: 'things', x: 2}, sort, { x: 7 })
 *  // results in [{a: 'stuff', x: 8}, {a: 'things', x: 2}]
 *  ```
 *
 * @param {any[]} array - The array
 * @param {number|string|Function} value - The value parameter.
 * @param {any} args - The value for when the second argument is a sort function (should match the
 *     same type as items expected by the sort function)
 * @returns {any[]} - Array of all values that came after the target value. If the target value was
 *     not an expected type, the original array will be returned.
 */
export default (array, value, ...args) => OVERLOAD[typeof value]?.(array, value, ...args) ?? array;
