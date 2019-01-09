const caesarCipher = require('../caesar-cipher');

describe('Caesar cipher:', () => {
    test('should return transformed string (number 3 given)', () => {
        let initialString  = 'Zoo Keeper';
        let expectedString = 'Crr Nhhshu';
        
        let shiftNumber = 3;

        expect(caesarCipher(initialString, shiftNumber)).toEqual(expectedString);
    });

    test('should return transformed string (number 84 given)', () => {
        let initialString  = 'I love Javascript'
        let expectedString = 'O rubk Pgbgyixovz';

        let shiftNumber = 84;

        expect(caesarCipher(initialString, shiftNumber)).toEqual(expectedString);
    });

    test('should return empty string (since empty string given)', () => {
        let shiftNumber = 99;

        expect(caesarCipher('', shiftNumber)).toEqual('');
    });

    test('should return origin string (no num parameter passed)', () => {
        let initialString  = 'Caesar cipher'

        expect(caesarCipher(initialString)).toEqual(initialString);
    });

    test('should return empty string (no parameters passed)', () => {
        expect(caesarCipher()).toEqual('');
    });
});
