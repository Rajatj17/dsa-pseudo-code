### Problem Statement
You are given a maze of size `m x n` represented by a 2D array `v` of integers, where 1 represents an open cell and 0 represents a blocked cell. You need to find the length of the longest path from the top-left cell to the bottom-right cell of the maze. You are allowed to move only in four directions: up, down, left, and right. If the destination cell is not reachable, return -1.

Write a function `findLongestPath` to compute the length of the longest path in the given maze.

### Input
- `m`: an integer representing the number of rows in the maze.
- `n`: an integer representing the number of columns in the maze.
- `v`: a 2D array of integers representing the maze.

### Output
- An integer representing the length of the longest path from the top-left cell to the bottom-right cell. If the destination cell is not reachable, return -1.

### Example
``` 
Input:
m = 3, n = 3
v = [
    [1, 0, 1],
    [1, 1, 0],
    [0, 1, 1]
]

Output:
4

Explanation:
The longest path is (0, 0) -> (0, 1) -> (1, 1) -> (1, 2) -> (2, 2), which has a length of 4.
```

### Pseudo code
``` 
findPath(m, n, i, j, v, mat):
    if i == m-1 and j == n-1:
        return (true, 0)
    if i >= m or i < 0 or j >= n or j < 0:
        return (false, -1)
    else:
        mat[i][j] = true
        res = (false, -1)
        if i < m-1 and v[i+1][j] == 1 and mat[i+1][j] == false:
            p1 = findPath(m, n, i+1, j, v, mat)
            if p1.first:
                res.first = true
                res.second = max(res.second, p1.second)
        # Similar checks for other directions
        mat[i][j] = false
        res.second += 1
        return res

findLongestPath(m, n, v):
    mat[100][100] = {{false}}
    p = findPath(m, n, 0, 0, v, mat)
    return p.second
```