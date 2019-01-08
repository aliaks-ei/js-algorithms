# Merge sort

## Description

_Merge sort_ is an efficient, general-purpose, comparison-based sorting algorithm.    
  
Conceptually, a merge sort works as follows:

  - divide the unsorted list into _n_ sublists, each containing one element (a list of one element is considered sorted).
  - repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

## Implementation

**_mergeSort(arr)_** should return an array, sorted with _merge sort_.

You should create 2 separate functions:
>   - _mergeSort(arr)_ that takes in a single, unsorted array as a parameter and split the array into two halves.
>   - _merge(array1, array2)_ that takes in two sorted arrays as parameters, merges those sorted arrays into one and returns one sorted array.

For example:

```
mergeSort([5, 3, 8, 2, 1, 4]) //  [1, 2, 3, 4, 5, 8]
```
