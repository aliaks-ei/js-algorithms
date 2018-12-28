/**
 * Create function binarySearch(numArray, key) that 
 * returns true if key is present and false if it's not. 
 */

(function () {
    
    function binarySearch(numArray, key) {
        let numArrLength = numArray.length;

        let middleIdx  = Math.floor(numArrLength / 2);
        let middleElem = numArray[middleIdx];
        
        if (key === middleElem) {
            return true;
        }
        else if (key < middleElem && numArrLength) {
            let leftHalf = numArray.slice(0, middleIdx);

            return binarySearch(leftHalf, key);
        }
        else if (key > middleElem && numArrLength) {
            let rightHalf = numArray.slice(middleIdx);
            
            return binarySearch(rightHalf, key);
        }
        else {
            return false;
        }
    }

    console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)); // true

})();
