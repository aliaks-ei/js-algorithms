function bubbleSort(array: number[]) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        const tempItem = array[j];

        array[j] = array[j + 1];
        array[j + 1] = tempItem;
      }
    }
  }

  return array;
}

export default bubbleSort;
