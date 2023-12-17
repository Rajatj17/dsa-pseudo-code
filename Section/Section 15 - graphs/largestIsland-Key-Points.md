## Problem Statement
You are given a 2D matrix `matrix` which represents an island. The value `1` represents land and the value `0` represents water. You need to find the size of the largest island.

You need to implement the function `largest_island` which takes in a 2D vector `matrix` and returns an integer that represents the size of the largest island.

### Input
- A 2D vector `matrix` of size `m x n` (1 <= m, n <= 50) where each element can be either 0 or 1.

### Output
- An integer representing the size of the largest island.

## Example
``` 
Input:
matrix = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1]
]

Output:
6
```

## Pseudo code
```
function dfs(matrix, visited, i, j, m, n):
    mark the current node as visited
    cs = 1
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]
    for k = 0 to 3:
        nx = i + dx[k]
        ny = j + dy[k]
        if nx >= 0 and nx < m and ny >= 0 and ny < n and matrix[nx][ny] == 1 and not visited[nx][ny]:
            cs += dfs(matrix, visited, nx, ny, m, n)
    return cs

function largest_island(matrix):
    m = matrix.size()
    n = matrix[0].size()
    visited = 2D array of size m x n initialized with false
    largest = 0
    for i = 0 to m-1:
        for j = 0 to n-1:
            if not visited[i][j] and matrix[i][j] == 1:
                size = dfs(matrix, visited, i, j, m, n)
                largest = max(largest, size)
    return largest
```