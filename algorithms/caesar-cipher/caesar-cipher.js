function caesarCipher(str, num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let lowerStr       = str.toLowerCase();
    let lowerStrLength = lowerStr.length;

    let newString = '';

    num = num % 26;

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
