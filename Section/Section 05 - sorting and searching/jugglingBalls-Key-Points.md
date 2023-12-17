## Problem Statement
You are given an array `a` containing only 0s, 1s, and 2s. Sort the array in ascending order in-place.

Write a function `sortBalls` to sort the array `a`.

## Example
Input: [2, 0, 2, 1, 1, 0]  
Output: [0, 0, 1, 1, 2, 2]

Input: [1, 0, 2, 1, 0]  
Output: [0, 0, 1, 1, 2]

## Pseudo code
```
function sortBalls(a: vector of int) -> vector of int
    n = size of a
    s = 0
    e = n-1
    mid = 0
    while mid <= e
        if a[mid] == 0
            swap(a[s], a[mid])
            s++
            mid++
        else if a[mid] == 1
            mid++
        else
            swap(a[mid], a[e])
            e--
    return a
```