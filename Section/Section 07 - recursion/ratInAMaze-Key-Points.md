## Problem Statement
You are given a grid of size *(N x N)* where some cells are blocked. You have to navigate from the top-left corner to the bottom-right corner following only the open cells. Write a function `findPath` which takes an integer *n* and a 2D vector of characters *c* of size *(n x n)* as input, and returns a vector of integers representing the path from the starting point *(1, 1)* to the ending point *(n, n)*. You need to return an empty vector if no path exists.

## Example
```cpp
Input
n = 4
c = [
    ['.', 'X', '.', 'X'],
    ['.', '.', '.', 'X'],
    ['X', '.', '.', '.'],
    ['.', '.', 'X', '.']
]
Output
[1, 5, 6, 10, 14, 16]

Input
n = 3
c = [
    ['.', 'X', '.'],
    ['.', 'X', 'X'],
    ['.', '.', '.']
]
Output
[]
```

## Pseudo code
### `calc(n, c, v, i, j)`
1. if *i* equals *n* and *j* equals *n*, return *true*
2. if *i* equals *n+1* or *j* equals *n+1*, return *false*
3. if *j* is not equal to *n* and *c[i][j+1]* is not equal to 'X', then
    1. if `calc(n, c, v, i, j+1)` is true, then
       1. push *(i)*(n+1) + j+2* into *v*
       2. return *true*
4. if *i* is not equal to *n* and *c[i+1][j]* is not equal to 'X', then
    1. if `calc(n, c, v, i+1, j)` is true, then
       1. push *(i+1)*(n+1) + j+1* into *v*
       2. return *true*
5. return *false*

### `findPath(n, c)`
1. create a vector *v*
2. call `calc(n-1,c,v)`
3. push 1 into *v*
4. reverse *v*
5. return *v*