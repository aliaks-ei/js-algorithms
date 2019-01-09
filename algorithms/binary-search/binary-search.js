function binarySearch(numArray = [], key) {
    let numArrLength = numArray.length;

    if (!numArrLength) {
        return false;
    }

    let middleIndex = Math.floor(numArrLength / 2);
    let middleElem  = numArray[middleIndex];

    if (key === middleElem) {
        return true;
    }
    else if (key < middleElem && numArrLength > 1) {
        let leftHalf = numArray.slice(0, middleIndex);

        return binarySearch(leftHalf, key);
    }
    else if (key > middleElem && numArrLength > 1) {
        let rightHalf = numArray.slice(middleIndex);
        
        return binarySearch(rightHalf, key);
    }
    else {
        return false;
    }
}

module.exports = binarySearch;
