## Problem Statement
You are given an array of k sorted arrays. You need to merge them into a single sorted array.

Write a function `mergeKArrays` to merge the k sorted arrays into a single sorted array.

## Input
- A 2D array `arrays` representing k sorted arrays. Each sorted array has non-negative integers.
- The size of each array can be different.

## Output
- A single sorted array containing all the elements from the input arrays in non-decreasing order.

## Example
``` 
Input:
arrays = [
    [1, 3, 5, 7],
    [2, 4, 6],
    [0, 8, 9, 10]
]

Output:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
``` 

## Pseudo code
```
function mergeKArrays(arrays):
    k = size of arrays
    q = priority queue
    
    output = empty vector
    
    for i = 0 to k-1:
        element = arrays[i][0]
        q.push({element, i, 0})
    
    while q is not empty:
        top = q.top()
        q.pop()
        
        element = top[0]
        a_idx = top[1]
        e_idx = top[2]
        
        push element to output
        
        if e_idx + 1 < size of arrays[a_idx]:
            next_element = arrays[a_idx][e_idx + 1]
            q.push({next_element, a_idx, e_idx + 1})
    
    return output
```