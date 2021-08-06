const isPalindrome = require('./is-palindrome');

describe('Palindrome:', () => {
  test('should return true for given string (similar cases)', () => {
    const string = 'race car';

    expect(isPalindrome(string)).toEqual(true);
  });

  test('should return true for given string (different cases, punctuation marks)', () => {
    const string = 'A man, a plan, a canal, Panama!';

    expect(isPalindrome(string)).toEqual(true);
  });

  test('should return false for given string', () => {
    const string = 'A light flight';

    expect(isPalindrome(string)).toEqual(false);
  });

  test('should return true for empty string', () => {
    expect(isPalindrome('')).toEqual(true);
  });
});
