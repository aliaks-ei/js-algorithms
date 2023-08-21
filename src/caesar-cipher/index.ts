function caesarCipher(str: string, num: number): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const lowerStr = str.toLowerCase();
  const position = num % alphabet.length;

  let newString = "";

  for (let i = 0; i < lowerStr.length; i++) {
    const currentLetter = lowerStr[i];

    if (currentLetter === " ") {
      newString += currentLetter;
    } else {
      let newIndex = alphabet.indexOf(currentLetter) + position;

      if (newIndex > 25) {
        newIndex -= alphabet.length;
      }

      if (newIndex < 0) {
        newIndex = alphabet.length + newIndex;
      }

      newString +=
        str[i] === str[i].toUpperCase()
          ? alphabet[newIndex].toUpperCase()
          : alphabet[newIndex];
    }
  }

  return newString;
}

export default caesarCipher;
