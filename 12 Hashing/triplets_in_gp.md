## Problem Statement
You are given an array of integers `arr` and an integer `r`. Your task is to count the number of triplets `(a, b, c)` such that `a`, `b`, and `c` are elements of `arr` and `b` is equal to `a * r` and `c` is equal to `b * r`.

Write a function `count_triplets(arr: vector<int>, r: int) -> int` to calculate the number of such triplets and return the count. 

## Input
- An integer `n` representing the number of elements in the array `arr` (1 ≤ n ≤ $10^5$)
- An integer `r` representing the common ratio
- An array `arr` of integers of size `n` (1 ≤ arr[i] ≤ $10^9$)

## Output
- Returns an integer representing the count of triplets that satisfy the given condition.

## Example
Input: 
```
n = 4, r = 2
arr = [1, 2, 2, 4]
```

Output:
```
2
```

Input:
```
n = 6, r = 3
arr = [1, 3, 9, 9, 27, 81]
```

Output:
```
6
```

## Pseudo code
```
count_triplets(arr, r):
    n = arr.size()
    right = new empty unordered_map
    left = new empty unordered_map

    for x in arr:
        right[x]++
        left[x] = 0

    ans = 0
    for i from 0 to n-1:
        right[arr[i]]--

        if arr[i] mod r == 0:
            b = arr[i]
            a = arr[i] / r
            c = arr[i] * r

            ans += left[a] * right[c]

        left[arr[i]]++

    return ans
```