## Problem Statement
You are given an array of integers `a` and a positive integer `k`. Your task is to find the maximum element in every contiguous subarray of size `k` in the given array `a`. 

Write a function `maxSubArrayK` to find and print the maximum element in every contiguous subarray of size `k`.

## Input
- A list of integers `arr` of size `n` (1 <= n <= 10^5) representing the array.
- An integer `k` (1 <= k <= n) representing the size of subarray.

## Output
- Print the maximum element in every contiguous subarray of size `k`.

## Example
Input  
`arr` = [1, 2, 3, 1, 4, 5, 2, 3, 5]  
`k` = 3

Output  
3 3 4 5 5 5

## Pseudo code
```
function maxSubArrayK(arr, k):
    n = arr.size()
    Q = deque of integers of size k
    for i = 0 to k-1:
        while (Q is not empty and arr[i] > arr[Q.back()]):
            Q.pop_back()
        Q.push_back(i)
    for i = k to n-1:
        output arr[Q.front()]
        while (Q is not empty and Q.front() <= i-k):
            Q.pop_front()
        while (Q is not empty and arr[i] >= arr[Q.back()]):
            Q.pop_back()
        Q.push_back(i)
    output arr[Q.front()]
```