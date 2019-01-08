const twoSum = require('../two-sum');

describe('Two sum:', () => {
    test('should return all possible pairs from given array (positive numbers)', () => {
        let numArray  = [7, 0, 5, 3, 2];
        let targetSum = 5;
        
        let pairsArray = [ [0, 5], [3, 2] ];

        expect(twoSum(numArray, targetSum)).toEqual(pairsArray);
    });

    test('should return all possible pairs from given array', () => {
        let numArray  = [1, 6, 4, 5, 3, 3];
        let targetSum = 7;
        
        let pairsArray = [ [1, 6], [4, 3], [4, 3] ];

        expect(twoSum(numArray, targetSum)).toEqual(pairsArray);
    });

    test('should return empty array if no pairs found', () => {
        let numArray  = [1, 6, 4, 5, 3, 3];
        let targetSum = 99;

        expect(twoSum(numArray, targetSum)).toEqual([]);
    });

    test('should return empty array if no parameters passed', () => {
        expect(twoSum()).toEqual([]);
    });
});
