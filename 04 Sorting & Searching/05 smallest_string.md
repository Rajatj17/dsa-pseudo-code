## Problem Statement

You are given an array of strings. You need to concatenate the strings in such a way that the resulting string is the smallest lexicographically possible.

Write a function that takes in an array of strings and returns the resulting concatenated string which is smallest lexographically.

## Example

Input:
```
arr = {"a","ab","aba"}
```

Output:
```
aababa
```

## Pseudo code

```plaintext
function compare(x, y) 
    return x + y < y + x

arr = {"a","ab","aba"}
n = 3

sort(arr, arr + n, compare)

for s in arr
    output s
```