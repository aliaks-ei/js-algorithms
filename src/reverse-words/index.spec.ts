import reverseWords from ".";

describe("Reverse words:", () => {
  test("should reverse words in given string (simple string)", () => {
    const string = "Greetings from Earth";
    const reversed = "sgniteerG morf htraE";

    expect(reverseWords(string)).toEqual(reversed);
  });

  test("should reverse words in given string (complex string)", () => {
    const string = "This IS a complex string of diFFe'rent words";
    const reversed = "sihT SI a xelpmoc gnirts fo tner'eFFid sdrow";

    expect(reverseWords(string)).toEqual(reversed);
  });
});
