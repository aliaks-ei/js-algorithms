function reverseArrayInPlace(arr = []) {
    let arrLength = arr.length;

    for (let i = 0; i < arrLength / 2; i++) {
        let tempVar = arr[i];
        
        arr[i] = arr[arrLength - 1 - i];
        arr[arrLength - 1 - i] = tempVar;
    }

    return arr;
}

module.exports = reverseArrayInPlace;
