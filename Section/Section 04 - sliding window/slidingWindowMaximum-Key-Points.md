## Problem Statement

Given an array of integers `a` and a size `k`, the task is to find the maximum for each and every contiguous window of size `k`.

You need to implement a function `maxInWindow` to return a vector containing the maximum value for each window of size `k`.

### Input
- An array of integers `a`
- An integer `k` representing the window size

### Output
- A vector of integers containing the maximum value for each window of size `k`

## Example

### Input
```cpp
vector<int> a = {1, 3, -1, -3, 5, 3, 6, 7};
int k = 3;
```

### Output
```cpp
vector<int> result = {3, 3, 5, 5, 6, 7};
```

### Explanation
For the given input array `a` and window size `k = 3`, the maximum values for each window are as follows:
- window 1: {1, 3, -1} -> max = 3
- window 2: {3, -1, -3} -> max = 3
- window 3: {-1, -3, 5} -> max = 5
- window 4: {-3, 5, 3} -> max = 5
- window 5: {5, 3, 6} -> max = 6
- window 6: {3, 6, 7} -> max = 7

## Pseudo code
```cpp
function maxInWindow(a, k) 
    output = empty vector
    n = size of a
    Q = deque of size k

    for i = 0 to k-1
        while Q is not empty and a[i] > a[Q.back()]
            Q.pop_back()
        Q.push_back(i)

    for i = k to n-1
        output.push_back(a[Q.front()])
        while Q is not empty and Q.front() <= i-k
            Q.pop_front()
        while Q is not empty and a[i] >= a[Q.back()]
            Q.pop_back()
        Q.push_back(i)

    output.push_back(a[Q.front()])
    return output
```