function twoSum(numArray: number[], sum: number): number[][] {
  const pairs: number[][] = [];
  const hashTable: number[] = [];

  for (let i = 0; i < numArray.length; i++) {
    const currNum = numArray[i];
    const counterPart = sum - currNum;

    if (hashTable.includes(counterPart)) {
      pairs.push([counterPart, currNum]);
    }

    hashTable.push(currNum);
  }

  return pairs;
}

export default twoSum;
