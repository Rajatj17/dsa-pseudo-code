## Problem Statement
You are given two arrays `a1` and `a2` of integers. Your task is to find and print the pair of integers, where one integer is from `a1` and the other is from `a2`, such that their difference is minimum.

Consequently, please write a function `min_pair` that takes in two vectors of integers `a1` and `a2` and prints the pair of integers with minimum difference.

## Input
- Two vectors of integers `a1` and `a2`

## Output
- Print the pair of integers with minimum difference

## Example
``` 
Input:
a1 = [-1, 5, 10, 20, 3]
a2 = [26, 134, 135, 15, 17]

Output:
Min Pair 20 and 17
```


## Pseudo code
```
function min_pair(a1, a2):
    sort a2
    p1, p2, diff = 0
    diff = MAX_INT

    for x in a1:
        lb = lower_bound(a2.begin(),a2.end(),x) - a2.begin()
        if lb >= 1 && x - a2[lb-1] < diff:
            diff = x - a2[lb-1]
            p2 = x
            p1 = a2[lb-1]
        
        if lb != a2.size() && a2[lb] - x < diff:
            diff = a2[lb] - x
            p1 = x
            p2 = a2[lb]

    print "Min Pair "<<p1<<" and "<<p2
```