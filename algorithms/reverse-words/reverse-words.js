function reverseWords(string = '') {
  const arrayOfWords         = string.split(' ');
  const arrayOfReversedWords = [];

  arrayOfWords.forEach(word => {
    const wordLength = word.length;
    let reversedWord = '';

    for (let i = wordLength - 1; i >= 0; i--) {
      reversedWord += word[i];
    }

    arrayOfReversedWords.push(reversedWord);
  });

  return arrayOfReversedWords.join(' ');
}

module.exports = reverseWords;
