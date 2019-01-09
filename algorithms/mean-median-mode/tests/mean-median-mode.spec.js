const meanMedianMode = require('../mean-median-mode');

describe('Mean, median, mode:', () => {
    test('should return { mean: 3.25, median: 3.5, mode: [1, 4] }', () => {
        let numArray = [1, 2, 3, 4, 5, 4, 6, 1];
        let expected = {
            mean   : 3.25, 
            median : 3.5, 
            mode   : [1, 4]
        };

        expect(meanMedianMode(numArray)).toEqual(expected);
    });

    test('should return { mean: 2.625, median: 2.5, mode: [0] }', () => {
        let numArray = [0, 1, 2, 3, 0, 4, 5, 6];
        let expected = {
            mean   : 2.625, 
            median : 2.5, 
            mode   : [0]
        };

        expect(meanMedianMode(numArray)).toEqual(expected);
    });

    test('should return { mean: 2.875, median: 3, mode: [1, 3, 4] }', () => {
        let numArray = [3, 5, 4, 4, 1, 1, 2, 3];
        let expected = {
            mean   : 2.875, 
            median : 3, 
            mode   : [1, 3, 4]
        };

        expect(meanMedianMode(numArray)).toEqual(expected);
    });

    test('should return { mean: 0, median: null, mode: [] } if no parameter passed', () => {
        let expected = {
            mean   : 0, 
            median : null, 
            mode   : []
        };

        expect(meanMedianMode()).toEqual(expected);
    });
});


