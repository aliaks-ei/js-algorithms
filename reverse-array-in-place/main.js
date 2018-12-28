/**
 * Create function reverseArrayInPlace() that reverses a given array.
 * Conditions:
 *  - be sure to manipulate the array passed in
 *  - do not push elements into a new array and return that array
 *  - do no use array.reverse() method
 */

(function () {
    
    function reverseArrayInPlace(arr) {
        let arrLength = arr.length;

        for (let i = 0; i < arrLength / 2; i++) {
            let tempVar = arr[i];
            
            arr[i] = arr[arrLength - 1 - i];
            arr[arrLength - 1 - i] = tempVar;
        }
    }

    let initialArr = [1, 2, 6, 3, 5, 0];

    reverseArrayInPlace(initialArr); 

    console.log(initialArr); // [0, 5, 3, 6, 2, 1]

})();