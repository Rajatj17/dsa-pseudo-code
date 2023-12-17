## Problem Statement
You are given an array of integers `arr` and an integer `X`. Your task is to count the number of subsets of `arr` whose elements sum up to `X`.

You are required to implement a function `countSubsets` which takes in the following parameters:
* `arr`: an array of integers representing the input array
* `n`: an integer representing the number of elements in the input array
* `i`: an integer representing the current index of the array while processing the subsets
* `X`: an integer representing the sum we need to find subsets for

The function should return an integer representing the number of subsets of `arr` whose elements sum up to `X`.

## Input
- An array of integers `arr` of length `n` (1 <= n <= 20), where (1 <= arr[i] <= 100)
- An integer `X` representing the sum we need to find subsets for (1 <= X <= 1000)

## Output
- Return an integer representing the number of subsets of `arr` whose elements sum up to `X`.

## Example
Input: 
arr = [1, 2, 3, 4, 5] <br>
X = 10

Output:
3

## Pseudo code
```
function countSubsets(arr, n, i, X):
    if i == n:
        if X == 0:
            return 1
        return 0
        
    inc = countSubsets(arr, n, i+1, X - arr[i])
    exc = countSubsets(arr, n, i+1, X)
    return inc + exc

arr = [1, 2, 3, 4, 5]
X = 10
print countSubsets(arr, arr.size(), 0, X)
```