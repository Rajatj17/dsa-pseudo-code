```markdown
# Problem Statement
You are given an array containing the heights of mountains. A peak is a point where its adjacent elements are smaller than itself. Return the length of the longest mountain. A mountain can be from left to right or right to left.

## Input
- An array of integers `arr` representing the heights of the mountains. (3 <= arr.length <= 10^5)

## Output
- An integer representing the length of the longest mountain.

# Example
Input
arr = [5,6,1,2,3,4,5,4,3,2,0,1,2,3,-2,4]

Output
8

## Pseudo code

```
function highest_mountain(arr):
    n = length of arr
    largest = 0
    
    for i = 1 to (n-2):
        if arr[i] > arr[i-1] and arr[i] > arr[i+1]:
            cnt = 1
            j = i
            while j >= 1 and arr[j] > arr[j-1]:
                j--
                cnt++
            while i <= (n-2) and arr[i] > arr[i+1]:
                i++
                cnt++
            largest = max(largest, cnt)
        else:
            i++
    
    return largest
```
