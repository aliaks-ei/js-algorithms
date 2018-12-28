/**
 * Create function reverseWords() that should reverse each word in a given string.
 * 
 * There are 2 main conditions:
 *  - every word should be reversed BUT the string as a whole should
 *    not be reserved
 *  - do not use array.reverse() method
 */

(function () {
    
    function reverseWords(string) {
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

    console.log(reverseWords('This is a string of words')); // 'sihT si a gnirts fo sdrow'

})();