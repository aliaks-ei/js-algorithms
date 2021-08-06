# Binary search

## Description

_Binary search_ is a search algorithm that checks whether a target value within a sorted array or not.  
  
Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

## Implementation

**_binarySearch(numArray, key)_** should return **true** if ```key``` is present in ```numArray``` and **false** otherwise.

For example:

```
binarySearch([5, 7, 12, 16, 36, 56, 71], 56)  //  true
```
