## Problem Statement
You are given an array of integers `arr` and an integer `k`. Your task is to find the length of the longest subarray with a sum equal to `k`. If no such subarray exists, return 0.

Function Signature: `int longestSubarrayKSum(vector<int> arr,int k)`

## Example

Input:
arr = [10, 5, 2, 7, 1, 9]
k = 15

Output:
4

Explanation:
The subarray [5, 2, 7, 1] has a sum of 15 which is the longest subarray with a sum equal to `k`.


## Pseudo Code

```
FUNCTION longestSubarrayKSum(arr, k)
    n = arr.length
    m = empty map
    pre = 0
    len = 0

    FOR i = 0 to n-1
        pre += arr[i]

        IF pre == k
            len = max(len, i+1)

        IF m contains (pre - k)
            len = max(len, i - m[pre-k])
        ELSE
            m[pre] = i

    RETURN len
```

**Note**: The code provided is in C++, so the pseudocode provided here is a language-independent version of the given C++ code.