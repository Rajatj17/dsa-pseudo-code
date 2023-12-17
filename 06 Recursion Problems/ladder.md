## Problem Statement

You are given a staircase with `n` steps and you can climb either 1, 2, or 3 steps at a time. Write a function `countWays` to find the number of distinct ways to reach the top of the staircase.

### Input
- An integer `n` representing the number of steps in the staircase.

### Output
- An integer representing the total number of distinct ways to reach the top of the staircase.

## Example

Input
```
n = 4
```

Output
```
7
```

Input
```
n = 3
```

Output
```
4
```

## Pseudo code
```plaintext
function countWays(n):
    if n < 0:
        return 0
    if n == 0:
        return 1
    return countWays(n-1) + countWays(n-2) + countWays(n-3)

input n
print countWays(n)
```