const mergeSort = require('./merge-sort');

describe('Merge sort: ', () => {
  test('should return sorted array (only positive numbers)', () => {
    const rawArray    = [5, 3, 8, 2, 1, 4];
    const sortedArray = [1, 2, 3, 4, 5, 8];

    expect(mergeSort(rawArray)).toEqual(sortedArray);
  });

  test('should return sorted array (positive and negative numbers)', () => {
    const rawArray    = [-7, 13, 4, 1e8, 0, -15];
    const sortedArray = [-15, -7, 0, 4, 13, 1e8];

    expect(mergeSort(rawArray)).toEqual(sortedArray);
  });

  test('should return an empty array if no parameter passed', () => {
    expect(mergeSort()).toEqual([]);
  });
});

