function harmlessRansomNote(noteText = '', magazineText = '') {
  const noteArr         = noteText.split(' ');
  const magazineArr     = magazineText.split(' ');
  const wordsInMagazine = {};

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
