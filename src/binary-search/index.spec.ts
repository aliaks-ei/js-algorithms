import binarySearch from ".";

describe('Binary search: ', () => {
  test('should return true (array contains key)', () => {
    const numArray = [5, 7, 12, 16, 36, 56, 71];
    const key = 56;

    expect(binarySearch(numArray, key)).toBeTruthy();
  });

  test('should return false (array does not contains key)', () => {
    const numArray = [5, 7, 12, 16, 36, 56, 71];
    const key = 99;

    expect(binarySearch(numArray, key)).toBeFalsy();
  });

  test('should return false (empty array passed)', () => {
    const key = -33;

    expect(binarySearch([], key)).toBeFalsy();
  });
});
