/**
 * Create function twoSum(numArray, sum) that returns every pair 
 * of numbers from 'numArray' that adds up to the 'sum'.
 * 
 * There are 2 main rules:
 *  - Result should be an array of arrays
 *  - Any number in the 'numArray' can be used in multiple pairs
 */

(function () {
    
    function twoSum(numArray, sum) {
        let pairs     = [];
        let hashTable = [];

        const arrayLength = numArray.length;

        for (let i = 0; i < arrayLength; i++) {
            let currNum     = numArray[i];
            let counterPart = sum - currNum;

            if (hashTable.includes(counterPart)) {
                pairs.push([ currNum, counterPart ]);
            }

            hashTable.push(currNum);
        }

        return pairs;
    }

    console.log(twoSum([1, 6, 4, 5, 3, 3], 7)); // [ [6, 1], [3, 4], [3, 4] ]

})();
