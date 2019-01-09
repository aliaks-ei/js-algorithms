const binarySearch = require('../binary-search');

describe('Binary search: ', () => {
    test('should return true', () => {
        let numArray = [5, 7, 12, 16, 36, 56, 71];
        let key      = 56;
    
        expect(binarySearch(numArray, key)).toEqual(true);
    });
    
    test('should return false', () => {
        let numArray = [5, 7, 12, 16, 36, 56, 71];
        let key      = 99;
    
        expect(binarySearch(numArray, key)).toEqual(false);
    });

    test('should return false', () => {
        let numArray = [];
        let key      = -33;
    
        expect(binarySearch(numArray, key)).toEqual(false);
    });

    test('should return false if no parameters passed', () => {    
        expect(binarySearch()).toEqual(false);
    });
});
