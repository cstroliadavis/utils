const OVERLOAD = {
  number: (array, number) => array.slice(number),
  string: (array, string) => array.slice(array.findIndex((value) => value > string)),
  'function': (array, fn, comp) => array.slice(array.findIndex((value) => fn(value, comp) > 0)),
};

const after = (array, value, ...args) => OVERLOAD[typeof value]?.(array, value, ...args);

export default after;
