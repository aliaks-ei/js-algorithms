import harmlessRansomNote from ".";

describe('Harmless ransom note:', () => {
  test('should return true for given string and magazine text (similar cases)', () => {
    const noteText = 'this all in';
    const magazineText = 'this is all the magazine text in the magazine';

    expect(harmlessRansomNote(noteText, magazineText)).toBeTruthy();
  });

  test('should return true for given string and magazine text (one word duplicated)', () => {
    const noteText = 'you are very very beautiful';
    const magazineText = 'Sarah, are you listening for this very beautiful song that I\'ve sent you';

    expect(harmlessRansomNote(noteText, magazineText)).toBeFalsy();
  });

  test('should return false for given string and magazine text (different cases)', () => {
    const noteText = 'hello world';
    const magazineText = 'Hello from other World';

    expect(harmlessRansomNote(noteText, magazineText)).toBeFalsy();
  });

  test('should return false for empty string and magazine text', () => {
    const magazineText = 'Magazine text';

    expect(harmlessRansomNote('', magazineText)).toBeFalsy();
  });

  test('should return false for empty string and empty magazine text', () => {
    expect(harmlessRansomNote('', '')).toBeTruthy();
  });
});
