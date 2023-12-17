## Problem Statement
You are given a 2D grid representing a maze where each cell contains a positive integer representing the cost to traverse through that cell. Find the shortest path to reach the bottom right cell (m-1, n-1) from the top left cell (0, 0). You can only traverse in the four cardinal directions (up, down, left, right), and you are allowed to visit a cell more than once if it provides a shorter path to reach the destination.

You need to implement the `shortest_path` function which takes a 2D vector `grid` as input and returns an integer denoting the shortest path length.

## Example
Input:
```
grid = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
]
```
Output:
```
7
```
Explanation:
The shortest path is `1 -> 3 -> 1 -> 1 -> 1`, which gives a total cost of 7.

## Pseudo Code
```plaintext
shortest_path(grid):
    m = size of grid
    n = size of grid[0]
    i = 0
    j = 0

    dist = initialize a 2D vector of size (m+1) x (n+1) filled with INT_MAX
    
    dist[i][j] = grid[0][0]
    s = initialize an empty set using Compare class for custom sorting
    
    dx[] = {0, 0, 1, -1}
    dy[] = {1, -1, 0, 0}

    while s is not empty:
        it = s.begin()
        cx = it.x
        cy = it.y
        cd = it.dist
        s.erase(it)

        for k in range(4):
            nx = cx + dx[k]
            ny = cy + dy[k]

            if nx >= 0 and nx < m and ny >= 0 and ny < n and cd + grid[nx][ny] < dist[nx][ny]:
                temp = Node(nx, ny, dist[nx][ny])
                if temp exists in s:
                    remove temp from s
                nd = grid[nx][ny] + cd
                dist[nx][ny] = nd
                add Node(nx, ny, nd) to s
    
    return dist[m-1][n-1]
```