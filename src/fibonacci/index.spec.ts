import fibonacci from "./";

describe('Fibonacci:', () => {
  test('should return number on position 7', () => {
    expect(fibonacci(7)).toEqual(13);
  });

  test('should return number on position 2', () => {
    expect(fibonacci(2)).toEqual(1);
  });
});
