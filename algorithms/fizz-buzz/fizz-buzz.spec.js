const fizzBuzz = require('./fizz-buzz');

test('tests fizzBuzz with 2 as given number', () => {
    let expected = [1, 2];
    let received = fizzBuzz(2);

    expect(received).toEqual(expected);
});

test('tests fizzBuzz with 15 as given number', () => {
    let expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
    let received = fizzBuzz(15);

    expect(received).toEqual(expected);
});

test('tests fizzBuzz with no number passed', () => {
    expect(fizzBuzz()).toEqual([]);
});
