const reverseWords = require('../reverse-words');

describe('Reverse words:', () => {
    test('should reverse words in given string (simple string)', () => {
        let string   = 'Greetings from Earth'; 
        let reversed = 'sgniteerG morf htraE';

        expect(reverseWords(string)).toEqual(reversed);
    });

    test('should reverse words in given string (complex string)', () => {
        let string   = 'This IS a complex string of diFFe\'rent words'; 
        let reversed = 'sihT SI a xelpmoc gnirts fo tner\'eFFid sdrow';

        expect(reverseWords(string)).toEqual(reversed);
    });

    test('should return empty string if no parameter passed', () => {
        expect(reverseWords()).toEqual('');
    });
});
