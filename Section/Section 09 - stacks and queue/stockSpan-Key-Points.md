## Problem Statement
You are given an array `v` of stock prices for `n` days. The stock span of a stock price on day `i` is the maximum number of consecutive days (up to the current day) for which the stock price was less than or equal to the price on day `i`. 

Write a function `stockSpan` to calculate the stock span for each day and return it as an array.

## Example
Input
```plaintext
v = [100, 80, 60, 70, 60, 75, 85]
```
Output
```plaintext
[1, 1, 1, 2, 1, 4, 6]
```

## Pseudo code
```plaintext
function stockSpan(v):
    n = size of v
    stack s
    create vec of size n with all elements initialized to 1
    vec[0] = 1
    s.push(0)
    for i = 1 to n-1:
        while s is not empty and v[s.top()] <= v[i]:
            s.pop()
        if s is not empty:
            vec[i] = i - s.top()
        else:
            vec[i] = i + 1
        s.push(i)
    return vec
```