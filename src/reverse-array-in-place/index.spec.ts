import reverseArrayInPlace from ".";

describe('Reverse array in place:', () => {
  test('should reverse given array (only positive numbers)', () => {
    const array = [1, 4, 6, 6, 7, 8];
    const expected = [8, 7, 6, 6, 4, 1];

    expect(reverseArrayInPlace(array)).toEqual(expected);
  });

  test('should reverse given array (only two numbers)', () => {
    const array = [24, 2];
    const expected = [2, 24];

    expect(reverseArrayInPlace(array)).toEqual(expected);
  });

  test('should reverse given array (different types of data)', () => {
    const array = [0, 1e8, -300, 'hello', null, 24, -1];
    const expected = [-1, 24, null, 'hello', -300, 1e8, 0];

    expect(reverseArrayInPlace(array)).toEqual(expected);
  });
});
