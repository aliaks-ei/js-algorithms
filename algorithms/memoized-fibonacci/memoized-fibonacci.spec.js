const memoizedFibonacci = require('./memoized-fibonacci');

describe('Memoized Fibonacci:', () => {
  test('should return number on position 7', () => {
    expect(memoizedFibonacci(7)).toEqual(13);
  });

  test('should return number on position 55', () => {
    expect(memoizedFibonacci(55)).toEqual(139583862445);
  });

  test('should return number on position 1 if no index passed (by default)', () => {
    expect(memoizedFibonacci()).toEqual(1);
  });

  test('should return 1 if negative index passed', () => {
    expect(memoizedFibonacci(-10)).toEqual(1);
  });
});
