## Problem Statement
You are given an array of integers `a`, your task is to find the starting and ending index of the shortest subarray in `a` that needs to be sorted in order for the entire array to be sorted in ascending order. If the entire array is already sorted, you should return `{-1, -1}`.

You need to implement a function `subarraySorting` that takes in an array of integers `a` and returns a pair of integers representing the starting and ending index of the shortest subarray that needs to be sorted.

## Example
``` 
Input:
a = [1, 2, 5, 4, 3, 6, 7, 8, 9]

Output:
{1, 4}

Input:
a = [1, 2, 3, 4, 5]

Output:
{-1, -1}
```

## Pseudo code
```
function subarraySorting(a)
    b = copy of a
    sort a in ascending order
    i = 0
    while i < size of a and a[i] is equal to b[i]
        i++
    
    j = size of a - 1
    while j is greater than or equal to 0 and a[j] is equal to b[j]
        j--

    if i is equal to size of a
        return {-1, -1}
    else
        return {i, j}
```