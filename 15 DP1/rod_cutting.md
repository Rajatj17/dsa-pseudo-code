## Problem Statement

You are given an array `prices` consisting of `n` days, where `prices[i]` is the price of a given stock on the `i-th` day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

You need to implement a function `max_profit` which takes an integer array `prices` and an integer `n` as input and returns an integer representing the maximum profit.

Implement the `max_profit` function using the recursive approach as well as the bottom-up approach (dynamic programming).

## Example

Input
```cpp
prices = {1, 5, 8, 9, 10, 17, 17, 20}
n = 8
```

Output
```cpp
max_profit_dp(prices,n) = 19
```

Input
```cpp
prices = {7, 6, 4, 3, 1}
n = 5
```

Output
```cpp
max_profit_dp(prices,n) = 0
```

## Pseudocode

### max_profit function using recursive approach:
```
function max_profit(prices, n):
    if n <= 0:
        return 0
    ans = INT_MIN
    for i from 0 to n-1:
        cut = i + 1
        current_ans = prices[i] + max_profit(prices, n - cut)
        ans = max(ans, current_ans)
    return ans
```

### max_profit function using bottom-up approach (dynamic programming):
```
function max_profit_dp(prices, n):
    dp[n+1]
    dp[0] = 0
    for len from 1 to n:
        ans = INT_MIN
        for i from 0 to len-1:
            cut = i + 1
            current_ans = prices[i] + dp[len - cut]
            ans = max(current_ans, ans)
        dp[len] = ans
    return dp[n]
```

## C++ Pseudo code
```cpp
function max_profit(prices, n):
    if n <= 0:
        return 0
    ans = INT_MIN
    for i from 0 to n-1:
        cut = i + 1
        current_ans = prices[i] + max_profit(prices, n - cut)
        ans = max(ans, current_ans)
    return ans


function max_profit_dp(prices, n):
    dp[n+1]
    dp[0] = 0
    for len from 1 to n:
        ans = INT_MIN
        for i from 0 to len-1:
            cut = i + 1
            current_ans = prices[i] + dp[len - cut]
            ans = max(current_ans, ans)
        dp[len] = ans
    return dp[n]


main():
    prices = {1, 5, 8, 9, 10, 17, 17, 20}
    n = size_of(prices) / size_of(int)
    print max_profit_dp(prices, n)
```