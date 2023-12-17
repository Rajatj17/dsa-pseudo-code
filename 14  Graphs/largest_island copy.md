### Problem Statement
You are given a grid of size `m x n` with values 0 or 1, where 0 represents water and 1 represents land. An island is formed by connecting adjacent lands horizontally or vertically. Determine the size of the largest island in the grid.

You are required to implement a function `largest_island` to calculate the size of the largest island in the grid.

### Input
- A 2D vector `grid` representing the grid of size `m x n` containing 0 or 1, where 0 represents water and 1 represents land.

### Output
- An integer representing the size of the largest island in the grid.

### Example
Input
```cpp
grid = {
        {1, 0, 0, 1, 0},
        {1, 0, 1, 0, 0},
        {0, 0, 1, 0, 1},
        {1, 0, 1, 1, 1},
        {1, 0, 1, 1, 0}
        }
```
Output
```
8
```

### Pseudocode
```plaintext
function dfs(matrix, visited, i, j, m, n):
    visited[i][j] = true
    cs = 1
    dx[] = {1, -1, 0, 0}
    dy[] = {0, 0, 1, -1}
    for k=0 to 3:
        nx = i + dx[k]
        ny = j + dy[k]
        if nx>=0 and nx<m and ny>=0 and ny<n and matrix[nx][ny]=1 and not visited[nx][ny]:
            subcomponent = dfs(matrix, visited, nx, ny, m, n)
            cs += subcomponent
    return cs

function largest_island(matrix):
    m = size of matrix
    n = size of matrix[0]
    visited[m][n] = false
    largest = 0
    for i=0 to m:
        for j=0 to n:
            if not visited[i][j] and matrix[i][j]=1:
                size = dfs(matrix, visited, i, j, m, n)
                if size>largest:
                    largest = size
    return largest
    
grid = {
    {1, 0, 0, 1, 0},
    {1, 0, 1, 0, 0},
    {0, 0, 1, 0, 1},
    {1, 0, 1, 1, 1},
    {1, 0, 1, 1, 0}
}
print largest_island(grid)
```