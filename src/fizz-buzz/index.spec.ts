import fizzBuzz from ".";

describe("Fizz Buzz: ", () => {
  test("tests with 2 as given number", () => {
    const expected = [1, 2];
    const number = 2;

    expect(fizzBuzz(number)).toEqual(expected);
  });

  test("tests with 15 as given number", () => {
    const expected = [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ];
    const number = 15;

    expect(fizzBuzz(number)).toEqual(expected);
  });
});
