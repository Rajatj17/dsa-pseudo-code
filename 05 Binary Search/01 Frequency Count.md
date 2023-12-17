# Problem Statement
You are given a sorted array `arr` of integers and a key `key`. Your task is to find the count of occurrences of `key` in the array `arr`.

You need to implement the functions `lower_bound` and `upper_bound` to find the lower and upper bounds of `key` in the array respectively, and then calculate the count of occurrences of `key` in the array by subtracting the indices obtained from `lower_bound` and `upper_bound` and adding 1.

## Input
- A sorted array of integers `arr`
- A key integer `key`

## Output
- Count of occurrences of `key` in the array `arr`

## Example
Input
```
arr = [0,1,1,2,3,3,3,3,3,4,5,5,5,10]
key = 3
```

Output
```
5
```

## Pseudo Code
```plaintext
function lower_bound(arr, key):
    s = 0
    e = arr.size() - 1
    ans = -1
    while s <= e:
        mid = (s + e) / 2
        if arr[mid] == key:
            ans = mid
            e = mid - 1
        else if arr[mid] > key:
            e = mid - 1
        else:
            s = mid + 1
    return ans

function upper_bound(arr, key):
    s = 0
    e = arr.size() - 1
    ans = -1
    while s <= e:
        mid = (s + e) / 2
        if arr[mid] == key:
            ans = mid
            s = mid + 1
        else if arr[mid] > key:
            e = mid - 1
        else:
            s = mid + 1
    return ans

arr = [0,1,1,2,3,3,3,3,3,4,5,5,5,10]
key = 3
output = upper_bound(arr, 3) - lower_bound(arr, 3) + 1
print output
```