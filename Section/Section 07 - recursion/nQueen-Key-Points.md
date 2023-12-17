## Problem Statement
You are given a board of size `N x N`. You have to place `N` Queens on the board such that no two queens threaten each other. A queen can move horizontally, vertically, and diagonally. Your task is to find the number of possible configurations to place `N` Queens on the board.

You need to implement a function `nQueen` that takes an integer `n` as input and returns the number of possible configurations to place `n` Queens on the board.

## Example

Input:
```cpp
n = 4
```

Output:
```cpp
nQueen(4) = 2
```

The two possible configurations to place 4 Queens on the board are:
```
[0 1 0 0]
[0 0 0 1]
[1 0 0 0]
[0 0 1 0]

[0 0 1 0]
[1 0 0 0]
[0 0 0 1]
[0 1 0 0]
```
## Pseudocode for the given C++ code
```plaintext
function isSafe(N, mat, r, c):
    for i from 0 to r:
        if mat[i][c] == 1:
            return 0
    for i from r to 0 and j from c to 0:
        if mat[i][j] == 1:
            return 0
    for i from r to 0 and j from c to N:
        if mat[i][j] == 1:
            return 0
    return 1

function solve(N, mat, r):
    if r == N:
        increment cnt by 1
        return
    for i from 0 to N:
        if isSafe(N, mat, r, i):
            set mat[r][i] to 1
            solve(N, mat, r+1)
            set mat[r][i] to 0

function nQueen(n):
    set cnt to 0
    create 2D array arr of size 20x20 initialized with 0
    call solve(n, arr, 0)
    return cnt
```