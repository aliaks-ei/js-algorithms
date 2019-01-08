function reverseWords(string = '') {
    let arrayOfWords         = string.split(' ');
    let arrayOfReversedWords = [];

    arrayOfWords.forEach(word => {
        let reversedWord = '';
        let wordLength   = word.length;

        for (let i = wordLength - 1; i >= 0; i--) {
            reversedWord += word[i];
        }

        arrayOfReversedWords.push(reversedWord);
    });

    return arrayOfReversedWords.join(' ');
}

module.exports = reverseWords;
