## Problem Statement

You are given an array of integers `arr`. Your task is to find the shortest subarray, such that if you sort that subarray, the entire array would be sorted. 

Write a function `subarraySort` to find the indices of the shortest such subarray in the given array.

**Function Signature:**
```cpp
pair<int,int> subarraySort(vector<int> arr)
```

**Input**
- A vector of integers `arr` representing the array of integers (3 <= arr.size() <= 10^5)

**Output**
- Return a pair of integers which represent the starting and ending index of the smallest subarray that needs to be sorted to get the entire array sorted. If the entire array is already sorted, then return {-1, -1}

## Example
```cpp
vector<int> arr = {1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11};
subarraySort(arr) => {5, 7}

vector<int> arr = {1, 2, 3, 4};
subarraySort(arr) => {-1, -1}
```

## Pseudo Code
```plaintext
Function subarraySort(arr):
    smallest = INT_MAX
    largest = INT_MIN
    
    for i from 0 to arr.size()-1:
        x = arr[i]
        if outOfOrder(arr, i):
            smallest = min(smallest, x)
            largest = max(largest, x)

    if(smallest==INT_MAX):
        return {-1,-1}
    
    left = 0
    while(smallest >= arr[left]):
        left++
    
    right = arr.size() - 1
    while(largest <= arr[right]):
        right--

    return {left, right}


Function outOfOrder(arr, i):
    x = arr[i]
    if(i==0):
        return x > arr[1]
    if(i==arr.size()-1):
        return x < arr[i-1]
    return x > arr[i+1] or x < arr[i-1]
```
This pseudo code represents the problem statement in the form of descriptive text and follows the same logic as the original C++ code.