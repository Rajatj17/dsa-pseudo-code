## Problem Statement
You are given a stream of integers, you need to find the median of the integers encountered so far. A median is the middle value of a data set when it is sorted in ascending order. If the data set has an odd number of observations, the median is the middle value. If the data set has an even number of observations, the median is the average of the two middle values.

Write a program to find the running median using heaps.

## Input
- A stream of integers.
- The stream of integers ends with -1.

## Output
- The running median after processing each integer.

## Example
Input:
```
5 10 15 20 25 -1
```
Output:
```
5 7.5 10 12.5 15 17.5
```

## Pseudocode
```
Let leftheap be a maxheap
Let rightheap be a minheap

Read input integer d
Insert d into leftheap

Set med as d
Print med

Read input integer d
While d is not equal to -1:
    If size of leftheap is greater than size of rightheap:
        If d is less than med:
            Insert top element of leftheap into rightheap
            Remove top element from leftheap
            Insert d into leftheap
        Else:
            Insert d into rightheap
        Set med as (top element of leftheap + top element of rightheap)/2.0
    Else if size of leftheap is equal to size of rightheap:
        If d is less than med:
            Insert d into leftheap
            Set med as top element of leftheap
        Else:
            Insert d into rightheap
            Set med as top element of rightheap
    Else:
        If d is less than med:
            Insert d into leftheap
        Else:
            Insert top element of rightheap into leftheap
            Remove top element from rightheap
            Insert d into rightheap
        Set med as (top element of leftheap + top element of rightheap)/2
    Print med
    Read input integer d
```