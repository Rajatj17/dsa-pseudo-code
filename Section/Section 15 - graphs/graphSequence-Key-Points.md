## Problem Statement

You are given a 2D matrix of integers. You need to find the length of the longest increasing path in the matrix.

Write a function `longestPathSequence` that takes in a 2D array of integers `matrix` as input and returns an integer representing the length of the longest increasing path in the matrix.

```cpp
int longestPathSequence(vector<vector<int>> matrix) {
  
}
```

## Example

Input

```cpp
matrix = [
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1]
]
```

Output

```cpp
4
```

Explanation

The longest increasing path is [1, 2, 6, 9].

The function should return 4.

## Pseudo code

```plaintext
Function longestPathSequence(matrix):
    m = number of rows in matrix
    n = number of columns in matrix
    
    visited = 2D array of size (m+1) x (n+1) initialized with 0
    cache = 2D array of size (m+1) x (n+1) initialized with 0
    ans = 0
    
    for i from 0 to m-1:
        for j from 0 to n-1:
            dfs(matrix, visited, cache, i, j, m, n)
            ans = max(ans, cache[i][j])
            
    return ans + 1


Function dfs(matrix, visited, cache, i, j, m, n):
    Set visited[i][j] = 1
    
    dx = [-1, 1, 0, 0]
    dy = [0, 0, 1, -1]
    
    cnt = 0
    
    for k from 0 to 3:
        nx = i + dx[k]
        ny = j + dy[k]
        
        if nx is within bounds and ny is within bounds and matrix[nx][ny] > matrix[i][j]:
            subProblemCnt = 0
            if visited[nx][ny]:
                cnt = max(cnt, 1 + cache[nx][ny])
            else:
                dfs(matrix, visited, cache, nx, ny, m, n)
                cnt = max(cnt, 1 + cache[nx][ny])
                
    cache[i][j] = cnt
```