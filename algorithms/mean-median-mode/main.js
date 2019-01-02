/**
 * Create function meanMedianMode() that returns object with 3 params:
 *  - mean - the mean of the array values
 *  - median - the median of the array values
 *  - mode - the mode of the array values
 * 
 * Create 4 separate functions:
 *  - getMean()
 *  - getMedian()
 *  - getMode()
 *  - meanMedianMode() - calls 3 other functions
 */

(function () {

    function getMean(array) {
        let sumOfItems = 0;

        array.forEach(item => sumOfItems += item);

        // NOTE: similar with Array.prototype.reduce() method
        // sumOfItems = array.reduce((a, b) => a + b, 0);

        return sumOfItems / array.length;
    }

    function getMedian(array) {
        array.sort((a, b) => a - b);

        let arrLength = array.length;
        let median    = null;

        if (arrLength % 2) {
            median = array[Math.floor(arrLength / 2)];
        }
        else {
            let mid1 = array[(arrLength / 2) - 1];
            let mid2 = array[arrLength / 2];

            median = (mid1 + mid2) / 2;
        }

        return median;
    }

    function getMode(array) {
        let valuesObj = {};

        array.forEach(item => {
            if (!valuesObj[item]) {
                valuesObj[item] = 0;
            }

            valuesObj[item]++;
        });

        let maxFrequency = 0;
        let modes = [];

        for (let key in valuesObj) {           
            if (valuesObj[key] > maxFrequency) {
               maxFrequency = valuesObj[key];
               modes = [ key ];
            }
            else if (valuesObj[key] === maxFrequency) {
                modes.push(key);
            }
        }

        if (modes.length === Object.keys(valuesObj).length) {
            modes = [];
        }

        return modes;
    }
    
    function meanMedianMode(array) {
        let mean   = getMean(array);
        let median = getMedian(array);
        let mode   = getMode(array);

        return { mean, median, mode };
    }

    console.log(meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1])); // { mean: 3.25, median: 3.5, mode: [1, 4]  }

})();