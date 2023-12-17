## Problem Statement
You are given a list of activities with their start and end times represented as a pair of integers `(start, end)`. The goal is to find the maximum number of non-overlapping activities that can be scheduled.

Write a function `int countActivities(vector<pair<int,int> > v)` to find the maximum number of non-overlapping activities that can be scheduled.

The function takes in a vector `v` representing the activities with their start and end times as pairs of integers and returns an integer representing the maximum number of non-overlapping activities that can be scheduled.

## Example
```plaintext
Input: v = [(1, 3), (2, 4), (3, 5), (5, 7), (8, 9)]
Output: 3
Explanation: The maximum number of non-overlapping activities that can be scheduled is 3. One such way to schedule them is (1, 3), (3, 5), (8, 9).

Input: v = [(1, 2), (2, 3), (3, 4), (4, 5)]
Output: 4
Explanation: The maximum number of non-overlapping activities that can be scheduled is 4. One such way to schedule them is (1, 2), (2, 3), (3, 4), (4, 5).
```

## Pseudo code
```
function countActivities(v: vector<pair<int,int>>):
    sort v according to the end times using a custom compare function
    count = 1
    finish = v[0].second

    for i = 1 to v.size() - 1:
        if v[i].first >= finish:
            count++
            finish = v[i].second

    return count
```