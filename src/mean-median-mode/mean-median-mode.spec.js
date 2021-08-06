const meanMedianMode = require('./mean-median-mode');

describe('Mean, median, mode:', () => {
  test('should return { mean: 3.25, median: 3.5, mode: [1, 4] }', () => {
    const numArray = [1, 2, 3, 4, 5, 4, 6, 1];
    const expected = {
      mean   : 3.25,
      median : 3.5,
      mode   : [1, 4]
    };

    expect(meanMedianMode(numArray)).toEqual(expected);
  });

  test('should return { mean: 2.625, median: 2.5, mode: [0] }', () => {
    const numArray = [0, 1, 2, 3, 0, 4, 5, 6];
    const expected = {
      mean   : 2.625,
      median : 2.5,
      mode   : [0]
    };

    expect(meanMedianMode(numArray)).toEqual(expected);
  });

  test('should return { mean: 2.875, median: 3, mode: [1, 3, 4] }', () => {
    const numArray = [3, 5, 4, 4, 1, 1, 2, 3];
    const expected = {
      mean   : 2.875,
      median : 3,
      mode   : [1, 3, 4]
    };

    expect(meanMedianMode(numArray)).toEqual(expected);
  });

  test('should return { mean: 0, median: null, mode: [] } if no parameter passed', () => {
    const expected = {
      mean   : 0,
      median : null,
      mode   : []
    };

    expect(meanMedianMode()).toEqual(expected);
  });
});


