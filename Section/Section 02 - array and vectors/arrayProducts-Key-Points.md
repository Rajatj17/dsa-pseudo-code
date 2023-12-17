## Problem Statement

You are given an array `arr` of integers. Your task is to return an array `prod` such that each element `prod[i]` is equal to the product of all the elements of `arr` except `arr[i]`.

You need to implement a function `productArray` that takes in the following parameter:
- `arr` which is a vector of integers (1 <= arr.size() <= 10^5)

The function should return a vector of integers.

## Example

Input
arr = [1, 2, 3, 4]

Output
prod = [24, 12, 8, 6]

## Pseudo code
```plaintext
function productArray(arr):
    n = arr.size()
    if n == 1:
        return [0]
    
    temp = 1
    prod = new Array of size n filled with 1
    
    for i from 0 to n-1:
        prod[i] = temp
        temp *= arr[i]
    
    temp = 1
    
    for i from n-1 downto 0:
        prod[i] *= temp
        temp *= arr[i]
    
    return prod
```