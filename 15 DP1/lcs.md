```markdown
# Longest Common Subsequence

## Problem Statement
Given two strings s1 and s2, find the length of the longest common subsequence of the two strings. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

## Input
- Two strings s1 and s2

## Output
- An integer representing the length of the longest common subsequence of the two strings.

## Example
Input:
s1 = "ABCD"
s2 = "ABEDG"

Output:
3

## Pseudo code
```
function lcs(s1, s2, i, j, dp):
    if i equals to length of s1 or j equals to length of s2:
        return 0
    if dp[i][j] not equal to -1:
        return dp[i][j]
    if s1[i] equals to s2[i]:
        dp[i][j] = 1 + lcs(s1, s2, i + 1, j + 1, dp)
    op1 = lcs(s1, s2, i + 1, j, dp)
    op2 = lcs(s1, s2, i, j + 1, dp)
    dp[i][j] = max(op1, op2)

function main():
    s1 = "ABCD"
    s2 = "ABEDG"
    n1 = length of s1
    n2 = length of s2
    dp = 2D vector of size (n1 + 1) * (n2 + 1) filled with -1
    print lcs(s1, s2, 0, 0, dp)
    for i = 0 to n1:
        for j = 0 to n2:
            print dp[i][j]
```