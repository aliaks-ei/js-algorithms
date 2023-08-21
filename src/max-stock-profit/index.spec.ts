import maxStockProfit from ".";

describe('Maximum stock profit: ', () => {
  test('should return 12 as maximum profit', () => {
    const prices = [10, 18, 2, 5, 9, 6, 16, 12]
    const profit = 14;

    expect(maxStockProfit(prices)).toBe(profit);
  });

  test('should return 16 as maximum profit', () => {
    const prices = [45, 24, 35, 31, 40, 38, 11]
    const profit = 16;

    expect(maxStockProfit(prices)).toBe(profit);
  });

  test('should return -1 as maximum profit', () => {
    const prices = [19, 18, 5, 4, 2, 1]
    const profit = -1;

    expect(maxStockProfit(prices)).toBe(profit);
  });

  test('should return 0 as maximum profit', () => {
    const prices = [22, 17, 6, 6, 3, 2, 1]
    const profit = 0;

    expect(maxStockProfit(prices)).toBe(profit);
  });

  test('should return -1 as maximum profit because empty array passed', () => {
    const profit = -1;

    expect(maxStockProfit([])).toBe(profit);
  });
});
