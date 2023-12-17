### Problem Statement

You are given an array of *n* integers representing the sizes of plots. You need to find the smallest window that contains a contiguous subarray of the given array, which has a sum equal to a given integer *k*. 

Write a function `housing` to find and print the starting and ending indices of the smallest window that satisfies the condition.

### Input

The function `housing` takes three parameters:
* An array of integers `arr[]` representing the sizes of plots.
* An integer `n`, representing the number of elements in the array.
* An integer `k`, representing the given sum.

### Output

The function should print the starting and ending indices of the smallest window that has a sum equal to the given integer *k*.

### Example

#### Input
```plaintext
arr[] = {1, 3, 2, 1, 4, 1, 3, 2, 1, 1}
n = 10
k = 8
```

#### Output
```plaintext
0 - 3
```

### Pseudo code
```plaintext
function housing(arr, n, k):
    i = 0
    j = 0
    cs = 0
    
    while j<n:
        cs += arr[j]
        j++
        
        while cs > k and i < j:
            cs -= arr[i]
            i++
        
        if cs == k:
            print i, "-", j-1
    
    return
```