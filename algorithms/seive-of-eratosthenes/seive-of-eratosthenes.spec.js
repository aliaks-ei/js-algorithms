const sieveOfEratosthenes = require('./seive-of-eratosthenes');

describe('Seive of Eratosthenes:', () => {
  test('should return all prime numbers up to 13', () => {
    const primeNumbersArray = [2, 3, 5, 7, 11, 13];

    expect(sieveOfEratosthenes(13)).toEqual(primeNumbersArray);
  });

  test('should return all prime numbers up to 27', () => {
    const primeNumbersArray = [2, 3, 5, 7, 11, 13, 17, 19, 23];

    expect(sieveOfEratosthenes(27)).toEqual(primeNumbersArray);
  });

  test('should return an empty array if no number passed', () => {
    expect(sieveOfEratosthenes()).toEqual([]);
  });

  test('should return an empty array if negative number passed', () => {
    expect(sieveOfEratosthenes(-5)).toEqual([]);
  });
});
