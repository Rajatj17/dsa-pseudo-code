### Problem Statement
You are given a `N x N` matrix where each cell contains either a `0` or a `1`. The `1` cells represent land and the `0` cells represent water.  An island is defined as a group of adjacent lands (horizontally or vertically). You need to find the size of the largest island in the grid.


### Input
- A `N x N` matrix `grid` where `grid[i][j]` represents the cell value and can be either `0` or  `1`. 

### Output
- The size of the largest island in the grid.


### Example
Input
``` 
grid = [
        [1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 1, 0]
        ]
```

Output
```
8
```

### Pseudo code
``` 
function dfs(matrix, visited, i, j, m, n):
    visited[i][j] = true
    cs = 1 
    dx[] = {1, -1, 0, 0}
    dy[] = {0, 0, 1, -1}
    for k = 0 to 3:
        nx = i + dx[k]
        ny = j + dy[k]
        if (nx >= 0 and nx < m and ny >= 0 and ny < n and matrix[nx][ny] == 1 and not visited[nx][ny]):
            subcomponent = dfs(matrix, visited, nx, ny, m, n)
            cs += subcomponent
    return cs

function largest_island(matrix):
    m = matrix.size()
    n = matrix[0].size()
    visited[m][n] = {false}
    largest = 0
    for i = 0 to m-1:
    	for j = 0 to n-1:
    		if (not visited[i][j] and matrix[i][j] == 1):
    			size = dfs(matrix, visited, i, j, m, n)
    			if (size > largest):
    				largest = size
    return largest


function main():
    grid = [
            [1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1],
            [1, 0, 1, 1, 1],
            [1, 0, 1, 1, 0]
            ]
    print(largest_island(grid))
```