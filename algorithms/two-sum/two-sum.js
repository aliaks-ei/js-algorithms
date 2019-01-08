function twoSum(numArray = [], sum) {
    let pairs     = [];
    let hashTable = [];

    const arrayLength = numArray.length;

    for (let i = 0; i < arrayLength; i++) {
        let currNum     = numArray[i];
        let counterPart = sum - currNum;

        if (hashTable.includes(counterPart)) {
            pairs.push([ counterPart, currNum ]);
        }

        hashTable.push(currNum);
    }

    return pairs;
}

module.exports = twoSum;
