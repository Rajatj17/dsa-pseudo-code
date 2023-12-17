## Problem Statement

You are given `k` sorted arrays containing a total of `n` elements. Your task is to merge these `k` arrays into one sorted array.

Write a function `mergeKArrays` to solve the problem.

    vector<int> mergeKArrays(vector<vector<int> > arrays){

Your task is to complete the `mergeKArrays` function which takes `k` sorted arrays and returns a single sorted array containing all the elements.

## Input

- A 2D vector `arrays` of size `k` x `n` (1 <= k,n <= 10^3), where `k` is the number of arrays and `n` is the number of elements in each array.
- The elements within each array are sorted in ascending order.

## Output

- Return a single sorted vector containing all the elements from the input arrays.

## Example

Input

```
arr = {{10,15,20,30},
        {2,5,8,14,24},
        {0,11,60,90}}
```

Output

```
0 2 5 8 10 11 14 15 20 24 30 60 90
```

## Pseudo code
```
function mergeKArrays(arrays):
    k = size of arrays
    q = priority_queue< vector<int> , vector<vector<int> > , greater<vector<int> > >

    output = vector<int>

    for i from 0 to k-1:
        element = arrays[i][0]
        q.push({element,i,0})

    while q is not empty:
        top = q.top()
        q.pop()

        element = top[0]
        a_idx = top[1]
        e_idx = top[2]

        output.push_back(element)

        if e_idx + 1 < size of arrays[a_idx]:
            next_element = arrays[a_idx][e_idx+1]
            q.push({next_element,a_idx,e_idx+1})

    return output
```