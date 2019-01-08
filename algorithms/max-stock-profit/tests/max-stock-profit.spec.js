const maxStockProfit = require('../max-stock-profit');

describe('Maximum stock profit: ', () => {
    test('should return 12 as maximum profit', () => {
        let prices = [10, 18, 2, 5, 9, 6, 16, 12]
        let profit = 14;

        expect(maxStockProfit(prices)).toBe(profit);
    });

    test('should return 16 as maximum profit', () => {
        let prices = [45, 24, 35, 31, 40, 38, 11]
        let profit = 16;

        expect(maxStockProfit(prices)).toBe(profit);
    });

    test('should return -1 as maximum profit', () => {
        let prices = [19, 18, 5, 4, 2, 1]
        let profit = -1;

        expect(maxStockProfit(prices)).toBe(profit);
    });

    test('should return 0 as maximum profit', () => {
        let prices = [22, 17, 6, 6, 3, 2, 1]
        let profit = 0;

        expect(maxStockProfit(prices)).toBe(profit);
    });

    test('should return -1 as maximum profit because empty array is passed', () => {
        let prices = []
        let profit = -1;

        expect(maxStockProfit(prices)).toBe(profit);
    });
});
