## Problem Statement
You are given an array `v` of length `n`, where `v[i]` represents the value of the `ith` coin. You have to pick the coins in an optimal way such that you maximize the total value of the coins you pick. However, there is a catch, you cannot pick two adjacent coins at the same time.

Write a function `MaxValue` to find the maximum value that can be obtained by picking the coins optimally.

## Input
- An integer `n` representing the number of coins in the array (1 <= n <= 1000)
- An array `v` of length `n` representing the values of coins (1 <= v[i] <= 100)

## Output
- An integer representing the maximum value that can be obtained by picking the coins optimally.

## Example

Input:
```cpp
n = 4
v = [1, 2, 3, 4]
```

Output:
```cpp
6
```

Input:
```cpp
n = 5
v = [9, 8, 7, 6, 5]
```

Output:
```cpp
21
```