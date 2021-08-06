function twoSum(numArray = [], sum) {
  const pairs       = [];
  const hashTable   = [];
  const arrayLength = numArray.length;

  for (let i = 0; i < arrayLength; i++) {
    const currNum     = numArray[i];
    const counterPart = sum - currNum;

    if (hashTable.includes(counterPart)) {
        pairs.push([counterPart, currNum]);
    }

    hashTable.push(currNum);
  }

  return pairs;
}

module.exports = twoSum;
