const reverseArrayInPlace = require('../reverse-array-in-place');

describe('Reverse array in place:', () => {
    test('should reverse given array (only positive numbers)', () => {
        let array    = [1, 4, 6, 6, 7, 8];
        let expected = [8, 7, 6, 6, 4, 1];

        expect(reverseArrayInPlace(array)).toEqual(expected);
    });

    test('should reverse given array (only two numbers)', () => {
        let array    = [24, 2];
        let expected = [2, 24];

        expect(reverseArrayInPlace(array)).toEqual(expected);
    });

    test('should reverse given array (different types of data)', () => {
        let array    = [0, 1e8, -300, 'hello', null, 24, -1];
        let expected = [-1, 24, null, 'hello', -300, 1e8, 0];

        expect(reverseArrayInPlace(array)).toEqual(expected);
    });

    test('should reverse empty array if no parameter passed', () => {
        expect(reverseArrayInPlace()).toEqual([]);
    });
});
