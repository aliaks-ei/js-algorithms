function harmlessRansomNote(noteText, magazineText) {
    let noteArr     = noteText.split(' ');
    let magazineArr = magazineText.split(' ');

    let magazineObj = {};

    let isNotePossible = true;

    magazineArr.forEach(word => {
        magazineObj[word]
            ? magazineObj[word]++
            : magazineObj[word] = 1;
    });

    noteArr.forEach(word => {
        if (!magazineObj[word]) {
            isNotePossible = false;
            
            return;
        }

        magazineObj[word]--;

        if (magazineObj[word] < 0) {
            isNotePossible = false;
        }
    });

    return isNotePossible;
}

module.exports = harmlessRansomNote;
