/**
 * You have been given two strings - 'noteText' and 'magazineText'. 
 * You have to find out whether you can make up the 'noteText' 
 * with the words present in the 'magazineText'.
 */

(function () {
    
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
                return (isNotePossible = false);
            }

            magazineObj[word]--;

            if (magazineObj[word] < 0) {
                isNotePossible = false;
            }
        });

        return isNotePossible;
    }

    console.log(harmlessRansomNote(
        'this all in', 
        'this is all the magazine text in the magazine')
    );

})();
