### Problem Statement
You are given a sequence of mixtures, where the values represent the composition of mixtures of different colors. The goal is to find the minimum amount of smoke generated when mixtures are mixed together. The amount of smoke generated is calculated using the formula: ( (Color of mixture i - Color of mixture i-1) % 100 ) * ( (Color of mixture i+1 - Color of mixture i) % 100 ), where i is the index of the mixture.

Write a function `minimumSmoke` to calculate the minimum amount of smoke generated when mixtures are mixed together.

### Input
- A sequence of mixtures represented by an array of integers `v` (1 ≤ v[i] ≤ 100)

### Output
- An integer representing the minimum amount of smoke generated.

### Example
Input:
```cpp
v = {18, 19, 15, 12}
```

Output:
```
270
```

### Pseudo code
```plaintext
function mixtures(v, i, j, dp):
    if i equals j, return 0
    if dp[i][j] is not -1, return dp[i][j]
    
    res = INT_MAX
    
    for k from i to j-1:
        ans = mixtures(v, i, k, dp) + mixtures(v, k + 1, j, dp)
        ans += ( ( (v[k] - (i > 0 ? v[i - 1] : 0) ) % 100 ) * ((v[j] - v[k]) % 100) )
        res = min(res, ans)
    
    return dp[i][j] = res

function minimumSmoke(v):
    create a 2D array dp with size 500x500 and initialize all values to -1
    
    n = size of v
    for i from 1 to n-1:
        v[i] += v[i - 1] // cumulative sum
    
    ans = mixtures(v, 0, n - 1, dp)
    return ans
```