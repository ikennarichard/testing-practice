const stringLength = require('./index');

test('returns the character count', () => {
  expect(stringLength('word')).toBe(4);
  expect(stringLength('microverse')).toBe(10);
});