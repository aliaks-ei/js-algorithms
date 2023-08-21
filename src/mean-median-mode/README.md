# Mean, median, mode

## Description

You will be given an array of numbers and your goal is to return an object with 3 parameters:

   - `mean` - the _"average"_ number found by adding all data points and dividing by the number of data points.
   - `median` - the _middle_ number found by ordering all data points and picking out the one in the middle (or if there are two middle numbers, taking the mean of those two numbers).
   - `mode` - the most _frequent_ data point(s) (the data point(s) that occurs the highest number of times).

## Implementation

`meanMedianMode(array)` should return an object with `mean`, `median` and `mode` parameters of the given `array`.

There are some conditions:
>   - you should create 3 separate functions to define every parameter (`getMean()`, `getMedian()`, `getMode()`).
>   - `getMode()` should return an array (even if only 1 number occurs the highest number of times).
>   - `meanMedianMode()` should call 3 functions described above.

Example:

```
meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]) // { mean: 3.25, median: 3.5, mode: [1, 4] }
```
