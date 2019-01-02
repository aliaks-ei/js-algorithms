/**
 * Create function mergeSort(arr) that returns array, sorted with merge sort. 
 * 
 * Create 2 separate functions:
 *  - mergeSort(arr) - take in a single, unsorted array 
 *    as a parameter and split the array into two halves.
 * 
 *  - merge(array1, array2) - takes in two sorted arrays as parameters,
 *    merges those sorted arrays into one and return one sorted array.
 */

(function () {

    function merge(array1, array2) {
        let result = [];

        while (array1.length && array2.length) {
            let minElem = (array1[0] < array2[0])
                ? array1.shift()
                : array2.shift();
            
                result.push(minElem);
        }

        result = array1.length
            ? result.concat(array1)
            : result.concat(array2);

        return result;
    }
    
    function mergeSort(arr) {
        if (arr.length < 2) {
            return arr;
        }

        let middleIdx = Math.floor(arr.length / 2);

        let firstHalf  = arr.slice(0, middleIdx);
        let secondHalf = arr.slice(middleIdx);

        return merge(
            mergeSort(firstHalf), 
            mergeSort(secondHalf)
        );
    }

    console.log(mergeSort([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]

})();
