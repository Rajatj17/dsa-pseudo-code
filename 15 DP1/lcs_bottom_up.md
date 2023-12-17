```markdown
## Problem Statement
You are given two strings `s1` and `s2`. You need to find the length of the longest common subsequence (LCS) of the two strings. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements. In this problem, we are seeking the longest subsequence common to both input strings.

Implement function `int lcs(string s1,string s2)` where
- s1: a string
- s2: a string
- Return the length of the LCS of `s1` and `s2`.

## Example
Input  
s1 = "ABCD"  
s2 = "ABEDG"  
Output  
3

## Pseudo code
```
function lcs(s1, s2):
    n1 = length of s1
    n2 = length of s2
    dp[n1+1][n2+1] = 2D array of size (n1 + 1) x (n2 + 1) filled with 0s
    
    for i = 1 to n1:
        for j = 1 to n2:
            if s1[i-1] is equal to s2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                op1 = dp[i-1][j]
                op2 = dp[i][j-1]
                dp[i][j] = maximum of (op1, op2)
    
    result = empty array
    i = n1
    j = n2
    while i != 0 and j != 0:
        if dp[i][j] is equal to dp[i][j-1]:
            j--
        else if dp[i][j] is equal to dp[i-1][j]:
            i--
        else:
            append s1[i-1] to result
            i--
            j--
    
    reverse result
    
    for x in result:
        print x, 

    return dp[n1][n2]
```