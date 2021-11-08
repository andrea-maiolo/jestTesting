const reverseString = require('./reverseString');

test('does it reverse the string', () => {
  expect(reverseString('hello')).toBe('olleh')
  expect(reverseString('andy')).toBe('ydna')
  expect(reverseString('F')).toBe('F')
  expect(reverseString('jfhui43dsbc')).toBe('cbsd34iuhfj')
});