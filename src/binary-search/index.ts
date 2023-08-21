function binarySearch(numArray: number[] = [], key: number): boolean {
  const numArrLength = numArray.length;

  if (!numArrLength) {
    return false;
  }

  const middleIndex = Math.floor(numArrLength / 2);
  const middleElem = numArray[middleIndex];

  if (key < middleElem && numArrLength > 1) {
    let leftHalf = numArray.slice(0, middleIndex);

    return binarySearch(leftHalf, key);
  }
  else if (key > middleElem && numArrLength > 1) {
    let rightHalf = numArray.slice(middleIndex);

    return binarySearch(rightHalf, key);
  }
  else {
    return key === middleElem;
  }
}

export default binarySearch;
