const bubbleSort = require('../bubble-sort');

describe('Bubble sort: ', () => {
    test('should return sorted array (only positive numbers)', () => {
        let rawArray    = [5, 3, 8, 2, 1, 4];
        let sortedArray = [1, 2, 3, 4, 5, 8];
    
        expect(bubbleSort(rawArray)).toEqual(sortedArray);
    });
    
    test('should return sorted array (positive and negative numbers)', () => {
        let rawArray    = [-7, 13, 4, 1e8, 0, -15];
        let sortedArray = [-15, -7, 0, 4, 13, 1e8];
    
        expect(bubbleSort(rawArray)).toEqual(sortedArray);
    });

    test('should return empty array if no parameter passed', () => {    
        expect(bubbleSort()).toEqual([]);
    });
});
