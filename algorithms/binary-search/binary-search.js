    
function binarySearch(numArray, key) {
    let numArrLength = numArray.length;

    let middleIdx  = Math.floor(numArrLength / 2);
    let middleElem = numArray[middleIdx];

    if (key === middleElem) {
        return true;
    }
    else if (key < middleElem && numArrLength > 1) {
        let leftHalf = numArray.slice(0, middleIdx);

        return binarySearch(leftHalf, key);
    }
    else if (key > middleElem && numArrLength > 1) {
        let rightHalf = numArray.slice(middleIdx);
        
        return binarySearch(rightHalf, key);
    }
    else {
        return false;
    }
}

module.exports = binarySearch;
