## Problem Statement

You are given a set of coins with different denominations and a total amount of money `s`. Your task is to find the number of combinations that make up that amount. You can use any number of coins of each type.

Write a function `findCombinations` to find the number of combinations to make up the amount `s` using the coins provided.

### Input
- An integer `n` representing the total amount of money (1 <= n <= 500)
- An array `coins` representing the denominations of the coins, where coins[i] represents the value of the ith coin (1 <= coins[i] <= 100)
- The denominations of the coins in the array are given in sorted order

### Output
- An integer representing the number of combinations that make up the amount `s` using the provided coins

## Example
Input:
```cpp
n = 5
coins = [1, 2, 5]
```

Output:
```
4
```

## Pseudocode
```plaintext
function coinChange(s, n, a, dp) 
    if n < 0 or s < 0
        return 0
    if s == 0
        return 1
    
    if dp[s][n] != 0
        return dp[s][n]

    op1 = coinChange(s, n - 1, a, dp)
    op2 = coinChange(s - a[n], n, a, dp)

    dp[s][n] = op1 + op2
    return dp[s][n]

function findCombinations(n, coins)
    create a 2D array dp of size 500x100 and initialize all values to 0
    return coinChange(n, size(coins) - 1, coins, dp)
```