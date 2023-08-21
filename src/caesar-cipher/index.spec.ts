import caesarCipher from "./";

describe('Caesar cipher:', () => {
  test('should return transformed string (number 3 given)', () => {
    const initialString = 'Zoo Keeper';
    const expectedString = 'Crr Nhhshu';

    const shiftNumber = 3;

    expect(caesarCipher(initialString, shiftNumber)).toEqual(expectedString);
  });

  test('should return transformed string (number 84 given)', () => {
    const initialString = 'I love Javascript'
    const expectedString = 'O rubk Pgbgyixovz';

    const shiftNumber = 84;

    expect(caesarCipher(initialString, shiftNumber)).toEqual(expectedString);
  });

  test('should return empty string (since empty string given)', () => {
    const shiftNumber = 99;

    expect(caesarCipher('', shiftNumber)).toEqual('');
  });
});
