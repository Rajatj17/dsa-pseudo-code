## Problem Statement
You are given an array `stones` where `stones[i]` represents the position of the `i-th` stone. You are also given an integer `k` which represents the maximum jump length you can take. You need to find the minimum cost to reach the last stone from the first stone. The cost to jump from the `i-th` stone to the `j-th` stone is the absolute difference in the positions of the stones, i.e., `abs(stones[j] - stones[i])`.

Write a function `minimumCost` to solve the problem, which takes in the following parameters:
* `stones`: a vector of integers representing the positions of the stones.
* `k`: an integer representing the maximum jump length.

The function should return the minimum cost to reach the last stone from the first stone.

## Input
- A vector of integers `stones` (2 <= |stones| <= 10^3), where `stones[i]` represents the position of the `i-th` stone.
- An integer `k` (1 <= k <= 1000), which represents the maximum jump length.

## Output
- Return the minimum cost to reach the last stone from the first stone.

## Example
```cpp
Input:
stones = [0, 1, 3, 6, 10, 15, 21, 28]
k = 3

Output:
13
```

## Pseudo Code
```plaintext
function minimumCost(stones, k):
    n = stones.length
    create an array dp of size n, initialize all elements to 0

    for i = 1 to n-1:
        dp[i] = INT_MAX

    for i = 0 to n-1:
        for j = i+1 to min(i+k, n-1):
            dp[j] = min(dp[j], dp[i] + abs(stones[j] - stones[i])

    return dp[n-1]
```