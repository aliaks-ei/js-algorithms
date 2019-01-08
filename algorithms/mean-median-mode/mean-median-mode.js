/** Mean */
function getMean(array = []) {
    let sumOfItems = 0;

    if (!array.length) {
        return sumOfItems;
    }

    array.forEach(item => sumOfItems += item);

    // NOTE: similar with Array.prototype.reduce() method
    // sumOfItems = array.reduce((a, b) => a + b, 0);

    return sumOfItems / array.length;
}

/** Median */
function getMedian(array = []) {
    array.sort((a, b) => a - b);

    let arrLength = array.length;
    let median    = null;

    if (!arrLength) {
        return median;
    }

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

/** Mode */
function getMode(array = []) {
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
            modes = [ parseInt(key, 10) ];
        }
        else if (valuesObj[key] === maxFrequency) {
            modes.push(parseInt(key, 10));
        }
    }

    if (modes.length === Object.keys(valuesObj).length) {
        modes = [];
    }

    return modes;
}

/** Main function */
function meanMedianMode(array = []) {
    let mean   = getMean(array);
    let median = getMedian(array);
    let mode   = getMode(array);

    return { mean, median, mode };
}

module.exports = meanMedianMode;
