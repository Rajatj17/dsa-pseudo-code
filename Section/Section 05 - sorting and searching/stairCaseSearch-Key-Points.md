## Problem Statement
You are given a 2D matrix `v` of size `m x n`, where all rows and columns are sorted in non-decreasing order. Your task is to find the position of the given key `k` in the matrix. If the key is present in the matrix, the function should return the row and column indices of the key; otherwise, it should return (-1,-1).

Write a function `search` to solve the problem. 

## Input
- An integer `m` representing the number of rows in the matrix `v` where 1 <= m <= 100
- An integer `n` representing the number of columns in the matrix `v` where 1 <= n <= 100
- A 2D vector `v` representing the matrix of integers where 0 <= v[i][j] <= 1000
- An integer `k` representing the key to be searched in the matrix where 0 <= k <= 1000

## Output
- The function should return a pair of integers `(i, j)` where i and j are the row and column indices of the key `k` in the matrix. If the key is not present, return (-1, -1).

## Example
```plaintext
m = 3
n = 4
v = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16]
]
k = 5
Output: (1, 1)

m = 3
n = 4
v = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16]
]
k = 10
Output: (-1, -1)
```

## Pseudo code
```
FUNCTION search(m, n, v, k):
    i <- m-1
    j <- 0
    WHILE j < n AND i >= 0 DO
        IF v[i][j] == k THEN
            BREAK
        ELSE IF v[i][j] < k THEN
            j <- j+1
        ELSE
            i <- i-1
    RETURN (i, j)
```