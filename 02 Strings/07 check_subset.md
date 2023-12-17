## Problem Statement
You are given two strings `s1` and `s2`. You have to determine whether `s2` is a subset of `s1`. A string `s2` is considered a subset of `s1` if all the characters of `s2` appear in the same order within `s1`.

Write a function `isSubset` to determine whether `s2` is a subset of `s1`.

## Input
- Two strings `s1` and `s2` where 1 <= |s1|, |s2| <= 10^5

## Output
- Return `true` if `s2` is a subset of `s1`, else `false`

## Example
Input:
```
s1 = "abcdefgh"
s2 = "ace"
```
Output:
```
true
```

Input:
```
s1 = "abracadabra"
s2 = "abc"
```
Output:
```
false
```


## Pseudo code
```plaintext
function isSubset(s1, s2):
    i = |s1| - 1
    j = |s2| - 1
    while i >= 0 and j >= 0:
        if s2[j] == s1[i]:
            i--
            j--
        else:
            i--
    if j == -1:
        return true
    return false
```