function harmlessRansomNote(noteText = '', magazineText = '') {
    let noteArr     = noteText.split(' ');
    let magazineArr = magazineText.split(' ');

    let wordsInMagazine = {};

    let isNotePossible = true;

    magazineArr.forEach(word => {
        wordsInMagazine[word]
            ? wordsInMagazine[word]++
            : wordsInMagazine[word] = 1;
    });

    noteArr.forEach(word => {
        if (!wordsInMagazine[word]) {
            isNotePossible = false;
            
            return;
        }

        wordsInMagazine[word]--;
    });

    return isNotePossible;
}

module.exports = harmlessRansomNote;
