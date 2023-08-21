function harmlessRansomNote(noteText: string, magazineText: string): boolean {
  const noteArr = noteText.split(" ");
  const magazineArr = magazineText.split(" ");
  const wordsInMagazine: Record<string, number> = {};

  let isNotePossible = true;

  magazineArr.forEach((word) => {
    wordsInMagazine[word]
      ? wordsInMagazine[word]++
      : (wordsInMagazine[word] = 1);
  });

  noteArr.forEach((word) => {
    if (!wordsInMagazine[word]) {
      isNotePossible = false;

      return;
    }

    wordsInMagazine[word]--;
  });

  return isNotePossible;
}

export default harmlessRansomNote;
