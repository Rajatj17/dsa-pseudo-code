## Problem Statement
You are given a 9x9 Sudoku grid. You need to solve the Sudoku puzzle using the given grid. A solved Sudoku is a 9x9 grid which every row, column & 3x3 subgrid contains all 1 to 9 integers.
Write a function that takes 9x9 vector grid input and returns the solved Sudoku grid.

## Example
```plaintext
Input:
[
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]
Output:
[
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]
```

## Pseudocode
```plaintext
function safe(grid, row, col, num):
    for x from 0 to 8:
        if grid[x][col] equals to num or grid[row][x] equals to num:
            return false
    for m from (row/3)*3 to ((row/3)*3)+3:
        for n from (col/3)*3 to ((col/3)*3)+3:
            if grid[m][n] equals to num:
                return false
    return true

function solve(grid, row, col):
    if row equals to 9:
        return true
    else if col equals to 9:
        return solve(grid, row+1, 0)
    else if grid[row][col] equals to 0:
        for num from 1 to 9:
            if safe(grid, row, col, num):
                grid[row][col] = num
                if solve(grid, row, col+1):
                    return true
        grid[row][col] = 0
        return false
    else:
       return solve(grid, row, col+1)

function solveSudoku(input):
    solve(input, 0,0)
    return input
```