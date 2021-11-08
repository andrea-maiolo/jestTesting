const capitalized = require('./capitalization');

test('check for capitalization', () => {
  expect(capitalized('hello')).toBe('Hello')
  expect(capitalized('andy')).toBe('Andy')
  expect(capitalized('F')).toBe('F')
  expect(capitalized('jfhuidsbc')).toBe('Jfhuidsbc')
});

