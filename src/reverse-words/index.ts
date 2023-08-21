function reverseWords(string: string): string {
  const arrayOfWords = string.split(" ");
  const arrayOfReversedWords: string[] = [];

  arrayOfWords.forEach((word) => {
    const wordLength = word.length;
    let reversedWord = "";

    for (let i = wordLength - 1; i >= 0; i--) {
      reversedWord += word[i];
    }

    arrayOfReversedWords.push(reversedWord);
  });

  return arrayOfReversedWords.join(" ");
}

export default reverseWords;
