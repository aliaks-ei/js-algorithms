interface MeanMedianMode {
  mean: number;
  median: number | null;
  mode: number[];
}

/** Mean */
function getMean(array: number[]): number {
  let sumOfItems = array.reduce((a, b) => a + b, 0);

  return sumOfItems / array.length;
}

/** Median */
function getMedian(array: number[]): number | null {
  const sortedArray = [...array].sort((a, b) => a - b);
  const arrLength = sortedArray.length;

  let median = null;

  if (!arrLength) {
    return median;
  }

  if (arrLength % 2) {
    median = sortedArray[Math.floor(arrLength / 2)];
  }
  else {
    const firstMiddleElem  = sortedArray[(arrLength / 2) - 1];
    const secondMiddleElem = sortedArray[arrLength / 2];

    median = (firstMiddleElem + secondMiddleElem) / 2;
  }

  return median;
}

/** Mode */
function getMode(array: number[]): number[] {
  const valuesObj: Record<number, number> = {};

  array.forEach(item => {
    if (!valuesObj[item]) {
      valuesObj[item] = 0;
    }

    valuesObj[item]++;
  });

  let maxFrequency = 0;
  let modes: number[] = [];

  for (let key in valuesObj) {
    if (valuesObj[key] > maxFrequency) {
      maxFrequency = valuesObj[key];
      modes = [parseInt(key, 10)];
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
function meanMedianMode(array: number[]): MeanMedianMode {
  let mean = getMean(array);
  let median = getMedian(array);
  let mode = getMode(array);

  return { mean, median, mode };
}

export default meanMedianMode;
