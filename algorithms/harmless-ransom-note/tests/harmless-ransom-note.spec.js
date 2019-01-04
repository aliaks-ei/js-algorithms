const harmlessRansomNote = require('../harmless-ransom-note');

describe('Harmless ransom note:', () => {
    test('should return true for given string and magazine text (similar cases)', () => {
        let noteText     = 'this all in';
        let magazineText = 'this is all the magazine text in the magazine';

        expect(harmlessRansomNote(noteText, magazineText)).toEqual(true);
    });

    test('should return false for given string and magazine text (different cases)', () => {
        let noteText     = 'hello world';
        let magazineText = 'Hello from other World';

        expect(harmlessRansomNote(noteText, magazineText)).toEqual(false);
    });

    test('should return false for empty string and magazine text', () => {
        let magazineText = 'Magazine text';

        expect(harmlessRansomNote('', magazineText)).toEqual(false);
    });

    test('should return false for empty string and empty magazine text', () => {
        expect(harmlessRansomNote('', '')).toEqual(true);
    });
});
