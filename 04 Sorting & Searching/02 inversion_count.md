## Problem Statement

You are given an array arr of integers. Count the number of inversions in the array using the divide and conquer approach. 

An inversion in an array arr occurs when there are two indices i and j such that i < j and arr[i] > arr[j].

Write a function `int inversion_count(vector<int> &arr, int s, int e)` where `arr` is the input array, `s` is the starting index of the array, and `e` is the ending index of the array. The function should return the number of inversions in the array.

## Example

Input
```
arr = {0,5,2,3,1}
s = 0
e = 4
```

Output
```
6
```

## Pseudo code

```plaintext
function merge(array, s, e):
    i = s
    m = (s+e)/2
    j = m + 1
    temp = []
    cnt = 0
    while i <= m and j <= e:
        if array[i] < array[j]:
            temp.push_back(array[i])
            i++
        else:
            cnt += (m - i + 1)
            temp.push_back(array[j])
            j++
    while i <= m:
        temp.push_back(array[i++])
    while j <= e:
        temp.push_back(array[j++])
    k = 0
    for idx = s to e:
        array[idx] = temp[k++]
    return cnt

function inversion_count(arr, s, e):
    if s >= e:
        return 0
    mid = (s+e)/2
    C1 = inversion_count(arr, s, mid)
    C2 = inversion_count(arr, mid+1, e)
    CI = merge(arr, s, e)
    return C1 + C2 + CI

arr = {0,5,2,3,1}
s = 0
e = 4
print inversion_count(arr, s, e)
```