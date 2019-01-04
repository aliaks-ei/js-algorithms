const isPalindrome = require('../is-palindrome');

describe('Palindrome:', () => {
    test('should return true for given string (similar case)', () => {
        let string = 'race car';

        expect(isPalindrome(string)).toEqual(true);
    });

    test('should return true for given string (different case, punctuation marks)', () => {
        let string = 'A man, a plan, a canal, Panama!';

        expect(isPalindrome(string)).toEqual(true);
    });

    test('should return false for given string', () => {
        let string = 'A light flight';

        expect(isPalindrome(string)).toEqual(false);
    });
});
