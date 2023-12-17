## Problem Statement
You are given a string `s`. Your task is to find the minimum number of cuts required to partition the string such that each partition is a palindrome.

## Example
Input
```plaintext
s = "aab"
```
Output
```plaintext
1
```
Explanation
The minimum cuts required is 1. We can partition the string as "aa | b" where "aa" is a palindrome.

Input
```plaintext
s = "nitin"
```
Output
```plaintext
0
```
Explanation
The given string is already a palindrome, so no cuts are required.

## Pseudo code
```plaintext
function palindromePartitioningMinCuts(s: string) -> integer:
    n = length of s
    isPalin = 2d vector of size (n+1) x (n) initialized with false
    for i = 0 to n-1:
        isPalin[i][i] = true
    
    for len = 2 to n:
        for i = 0 to n-len:
            j = i + len - 1
            if len == 2:
                isPalin[i][j] = (s[i]==s[j])
            else:
                isPalin[i][j] = (s[i]==s[j] and isPalin[i+1][j-1])
    
    cuts = vector of integers of size (n+1) initialized with INT_MAX
    for i = 0 to n-1:
        if isPalin[0][i]:
            cuts[i] = 0
        else:
            cuts[i]  = cuts[i-1] + 1
            for j = 1 to i-1:
                if isPalin[j][i] and cuts[j-1] + 1 < cuts[i]:
                    cuts[i] = cuts[j-1] + 1
    return cuts[n-1]

function partitioning(str: string) -> integer:
    ans = palindromePartitioningMinCuts(str)
    return ans
```