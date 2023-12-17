## Problem Statement

You are given two arrays of integers, `a1` and `a2`. Your task is to find two integers, one from each array, such that their absolute difference is minimum. Return the pair of integers.

Write a function `minDifference` to solve the problem. You need to implement the function with the following signature:
```
pair<int,int> minDifference(vector<int> a1,vector<int> a2)
```

### Input
- Two arrays of integers `a1` and `a2` (1 <= |a1|, |a2| <= $10^5$)

### Output
- a pair of integers representing the two integers from `a1` and `a2` such that their absolute difference is minimum.

## Example

Input
```
a1 = [1, 3, 15, 11, 2]
a2 = [23, 127, 235, 19, 8]
```

Output
```
(11, 8)
```

## Pseudo code
```
function minDifference(a1, a2):
    sort(a2)
    diff = INT_MAX
    p1, p2 = 0, 0
    
    for x in a1:
        lb = lower_bound(a2, x)
        
        if lb >= 1 and x - a2[lb-1] < diff:
            diff = x - a2[lb-1]
            p2 = a2[lb-1]
            p1 = x
            
        if lb != a2.size() and a2[lb] - x < diff:
            diff = a2[lb] - x
            p1 = x
            p2 = a2[lb]
    
    return {p1, p2}
```