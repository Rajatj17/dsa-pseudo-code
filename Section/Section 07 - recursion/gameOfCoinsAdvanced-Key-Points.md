## Problem Statement
You are given an array v of n integers and an integer k. You need to find the maximum sum you can obtain by choosing a subarray and replacing at most k elements in the subarray with 0s.

Write a function `MaxValue` to find the maximum sum where:
- n: number of elements in the array v
- v: the array of n integers
- k: the maximum number of elements you can replace with 0s

## Input
- An integer n (1 <= n <= 10^5) - represents the number of elements in the array v
- An array v of n integers (-1000 <= v[i] <= 1000) - represents the array of integers
- An integer k - the maximum number of elements you can replace with 0s

## Output
- An integer - representing the maximum sum you can obtain by replacing at most k elements in the subarray with 0s

## Function Signature
```cpp
int MaxValue(int n, vector<int> v, int k)
```

## Examples
Input:
n = 5
v = [1, 2, 3, 4, 5]
k = 2

Output:
12

Input:
n = 6
v = [1, -2, 3, -4, 5, -6]
k = 3

Output:
8