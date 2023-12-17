## Problem Statement
You are given an array `arr` of integers. You need to implement the quicksort algorithm to sort the given array in non-decreasing order.

## Input
An array `arr` of integers.

## Output
The sorted array in non-decreasing order.

## Example
Input:
```
arr = [10, 5, 2, 0, 7, 6, 4]
```

Output:
```
0 2 4 5 6 7 10
```

## Pseudo code
``` 
function partition(a : array of int, s : int, e : int) -> int
    pivot = a[e]
    i = s - 1
    for j = s to e-1
        if a[j] < pivot
            i = i + 1
            swap a[i] and a[j]
    swap a[i+1] and a[e]
    return i+1

function quicksort(a : array of int, s : int, e : int) 
    if s >= e
        return
    p = partition(a, s, e)
    quicksort(a, s, p-1)
    quicksort(a, p+1, e)
    
arr = [10, 5, 2, 0, 7, 6, 4]
n = size of arr
quicksort(arr, 0, n-1)
for x in arr
    output x
```