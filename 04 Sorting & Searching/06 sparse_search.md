## Problem Statement

You are given a sorted array of strings that is interspersed with empty strings. Write a method to find the location of a given string efficiently.

Complete the function `sparse_search(string a[],int n,string key)` where
- a[]: a sorted array of strings (interspersed with empty strings)
- n: number of elements in the array
- key: the string to search for

Return the index of the key in the array, or -1 if the key is not found.

## Example

Input
```
arr[] = {"ai", "", "","bat", "","","car","cat","","","dog",""}
n = 12
f = "car"
```

Output
```
6
```

Explanation
- The index of the string "car" in the array is 6.

## Pseudocode

```
function sparse_search(a[], n, key):
    s = 0
    e = n - 1
    while s <= e:
        mid = (s + e) / 2
        mid_left = mid - 1
        mid_right = mid + 1
        if a[mid] is empty string:
            while True:
                if mid_left < s and mid_right > e:
                    return -1
                elif mid_right <= e and a[mid_right] is not empty string:
                    mid = mid_right
                    break
                else if mid_left >= s and a[mid_left] is not empty string:
                    mid = mid_left
                    break
                mid_left--
                mid_right++
        if a[mid] equals key:
            return mid
        else if a[mid] > key:
            e = mid - 1
        else:
            s = mid + 1
    return -1
```