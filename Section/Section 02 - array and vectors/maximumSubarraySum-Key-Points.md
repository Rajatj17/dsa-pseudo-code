## Problem Statement
You are given an array of integers. Your task is to write a function `maxSubarraySum` to find the maximum sum of a contiguous subarray within the given array.

### Input
- A vector `arr` of integers (where 1 <= arr[i] <= 10^4 and 1 <= size of arr <= 10^4)

### Output
- Return the maximum sum of a contiguous subarray within the given array.

## Example
```cpp
Input: arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The contiguous subarray [4,-1,2,1] has the largest sum = 6.

Input: arr = [1, 2, 3, 4, -10]
Output: 10
Explanation: The contiguous subarray [1,2,3,4] has the largest sum = 10.
```


## Pseudo Code
```plaintext
function maxSubarraySum(arr):
    n = arr.size
    cs = 0
    ms = 0
    
    for i = 0 to n-1:
        cs += arr[i]
        ms = max(ms, cs)
        if cs < 0:
            cs = 0
            
    return ms
```