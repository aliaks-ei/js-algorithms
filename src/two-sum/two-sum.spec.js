const twoSum = require('./two-sum');

describe('Two sum:', () => {
  test('should return all possible pairs from the given array (positive numbers)', () => {
    const numArray  = [7, 0, 5, 3, 2];
    const targetSum = 5;

    const pairsArray = [ [0, 5], [3, 2] ];

    expect(twoSum(numArray, targetSum)).toEqual(pairsArray);
  });

  test('should return all possible pairs from the given array', () => {
    const numArray  = [1, 6, 4, 5, 3, 3];
    const targetSum = 7;

    const pairsArray = [ [1, 6], [4, 3], [4, 3] ];

    expect(twoSum(numArray, targetSum)).toEqual(pairsArray);
  });

  test('should return an empty array if no pairs found', () => {
    const numArray  = [1, 6, 4, 5, 3, 3];
    const targetSum = 99;

    expect(twoSum(numArray, targetSum)).toEqual([]);
  });

  test('should return an empty array if no parameters passed', () => {
    expect(twoSum()).toEqual([]);
  });
});
