## Problem Statement

You are given an array `arr` of integers. Your task is to find the length of the largest band in the array. A band is defined as a set of consecutive integers. 

Write a function `largestBand` to find and return the length of the largest band in the given array.

### Input
- A vector `arr` representing an array of integers.

### Output
- An integer representing the length of the largest band.

## Example

Input:
```
arr = [1, 9, 3, 0, 18, 5, 2, 10, 7, 12, 6]
```

Output:
```
6
```

## Pseudo Code

```
function largestBand(arr):
    n = size of arr
    s = new unordered_set
    
    for x in arr:
        s.insert(x)
    
    largestLen = 1
    
    for element in s:
        parent = element - 1
        
        if s.find(parent) == s.end:
            next_no = element + 1
            cnt = 1
            
            while s.find(next_no) != s.end:
                next_no++
                cnt++
            
            if cnt > largestLen:
                largestLen = cnt
    
    return largestLen

arr = [1, 9, 3, 0, 18, 5, 2, 10, 7, 12, 6]
largestBand(arr)
```