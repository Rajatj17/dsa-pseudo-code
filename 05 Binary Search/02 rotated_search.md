## Problem Statement
You are given a sorted, but rotated array A of n distinct integers which is sorted in ascending order. You need to find a particular element k in the array. Write a function `rotated_search` that takes an array `a` and an integer `key` as input and returns the index of `key` in the array `a`. If the element is not found, return -1.

## Example
```plaintext
Input:
a = [4,5,6,7,0,1,2,3]
key = 6
Output:
2

Input:
a = [4,5,6,7,0,1,2,3]
key = 10
Output:
-1
```

## Pseudo code
```plaintext
function rotated_search(a, key):
    n = size of a
    s = 0
    e = n - 1
    
    while s <= e:
        mid = (s + e) / 2
        
        if a[mid] is equal to key:
            return mid
        
        # 2 cases
        if a[s] <= a[mid]:
            # left
            if key >= a[s] and key <= a[mid]:
                e = mid - 1
            else:
                s = mid + 1
        else:
            # right
            if key >= a[mid] and key <= a[e]:
                s = mid + 1
            else:
                e = mid - 1
    
    return -1
    
# Input
a = [4,5,6,7,0,1,2,3]
key = 6

# Function call
output = rotated_search(a, key)

# Output
output
```