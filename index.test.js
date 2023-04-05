const stringLength = require('./index');

test('return count if string length is between 1 nad 10 ', () => {
  const str = 'Microverse';
  const len = str.length;
  expect(stringLength(str)).toBe(len);
});

test('return error if string length is not between 1 nad 10 ', () => {
  const str = '';
  const error = 'Error: str not between 1 and 10';
  expect(stringLength(str)).toBe(error);
});