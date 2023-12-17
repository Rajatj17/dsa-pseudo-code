## Problem Statement

The task is to solve the Sudoku puzzle using a given 9x9 grid representing the initial state of the puzzle. The goal is to fill in the grid such that every row, column, and 3x3 subgrid contains all the numbers from 1 to 9 without any duplicates.

## Input

A 9x9 grid representing the initial state of the Sudoku puzzle.

## Output

The solved Sudoku puzzle grid.

## Example

### Input

```
{{5,3,0,0,7,0,0,0,0},
{6,0,0,1,9,5,0,0,0},
{0,9,8,0,0,0,0,6,0},
{8,0,0,0,6,0,0,0,3},
{4,0,0,8,0,3,0,0,1},
{7,0,0,0,2,0,0,0,6},
{0,6,0,0,0,0,2,8,0},
{0,0,0,4,1,9,0,0,5},
{0,0,0,0,8,0,0,7,9}}
```

### Output

```
5 3 4 6 7 8 9 1 2
6 7 2 1 9 5 3 4 8
1 9 8 3 4 2 5 6 7
8 5 9 7 6 1 4 2 3
4 2 6 8 5 3 7 9 1
7 1 3 9 2 4 8 5 6
9 6 1 5 3 7 2 8 4
2 8 7 4 1 9 6 3 5
3 4 5 2 8 6 1 7 9
```


## Pseudo code

```
function isSafe(mat, i, j, no)
    for k from 0 to 8
        if mat[k][j] == no or mat[i][k] == no
            return false
    end for
    sx = (i / 3) * 3
    sy = (j / 3) * 3
    for x from sx to sx + 3
        for y from sy to sy + 3
            if mat[x][y] == no
                return false
            end if
        end for
    end for
    return true
end function

function solveSudoku(mat, i, j, n)
    if i == n
        for i from 0 to 8
            for j from 0 to 8
                print mat[i][j] and " "
            end for
            print newline
        end for
        return true
    end if

    if j == n
        return solveSudoku(mat, i + 1, 0, n)
    end if

    if mat[i][j] != 0
        return solveSudoku(mat, i, j + 1, n)
    end if

    for no from 1 to n
        if isSafe(mat, i, j, no)
            mat[i][j] = no
            solveSubproblem = solveSudoku(mat, i, j + 1, n)
            if solveSubproblem == true
                return true
            end if
        end if
    end for
    mat[i][j] = 0
    return false
end function

function main()
    n = 9
    mat = {{5,3,0,0,7,0,0,0,0},
            {6,0,0,1,9,5,0,0,0},
            {0,9,8,0,0,0,0,6,0},
            {8,0,0,0,6,0,0,0,3},
            {4,0,0,8,0,3,0,0,1},
            {7,0,0,0,2,0,0,0,6},
            {0,6,0,0,0,0,2,8,0},
            {0,0,0,4,1,9,0,0,5},
            {0,0,0,0,8,0,0,7,9}}
    if not solveSudoku(mat, 0, 0, n)
        print "No solution exists!"
    end if
end function
```