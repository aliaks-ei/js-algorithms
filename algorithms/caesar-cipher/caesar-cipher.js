function caesarCipher(str = '', num = 0) {
    const alphabet       = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const alphabetLength = alphabet.length;

    let lowerStr       = str.toLowerCase();
    let lowerStrLength = lowerStr.length;

    let newString = '';

    num = num % alphabetLength;

    for (let i = 0; i < lowerStrLength; i++) {
        let currentLetter = lowerStr[i];
        
        if (currentLetter === ' ') {
            newString += currentLetter;
        }
        else {
            let currentIndex = alphabet.indexOf(currentLetter);
            let newIndex     = currentIndex + num;

            if (newIndex > 25) {
                newIndex -= alphabet.length;
            }

            if (newIndex < 0) {
                newIndex = alphabet.length + newIndex;
            }

            str[i] === str[i].toUpperCase()
                ? newString += alphabet[newIndex].toUpperCase()
                : newString += alphabet[newIndex];
        }
    }

    return newString;
}

module.exports = caesarCipher;
