const fizzBuzz = require('./fizz-buzz');

test('logs [1, 2] in console', () => {
    expect(fizzBuzz(2)).toEqual([1, 2]);
});
