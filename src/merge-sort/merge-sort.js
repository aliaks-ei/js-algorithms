function merge(array1 = [], array2 = []) {
  let result = [];

  while (array1.length && array2.length) {
    const minElem = array1[0] < array2[0]
      ? array1.shift()
      : array2.shift();

    result.push(minElem);
  }

  result = result.concat(array1.length ? array1 : array2)

  return result;
}

function mergeSort(arr = []) {
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf   = arr.slice(0, middleIndex);
  const secondHalf  = arr.slice(middleIndex);

  return merge(
    mergeSort(firstHalf),
    mergeSort(secondHalf)
  );
}

module.exports = mergeSort;
