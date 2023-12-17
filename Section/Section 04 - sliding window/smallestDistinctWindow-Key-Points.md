## Problem Statement
You are given a string `s`. Write a function `smallestWindow` to find the smallest window that contains all the distinct characters of the given string `s`. If no such window exists, return an empty string.

## Input
- A string `s` (1 <= |s| <= 10^5)

## Output
- The smallest window that contains all the distinct characters of the given string `s`. If no such window exists, return an empty string.

## Example
Input: s = "abcbcad"

Output: "abc"

Input: s = "aaab"

Output: "ab"

Input: s = ""

Output: ""
  
## Pseudo code
```
function smallestWindow(str):
    n = str.length
    if n equals 0:
        return ""
    dist_count = 0
    visited[MAX_CHARS] = { false }
    for i = 0 to n-1:
        if visited[str[i]] equals false:
            visited[str[i]] = true
            dist_count++
    start = 0
    start_index = -1
    min_len = INT_MAX
    count = 0
    curr_count[MAX_CHARS] = { 0 }
    for j = 0 to n-1:
        curr_count[str[j]]++
        if curr_count[str[j]] equals 1:
            count++
        if count equals dist_count:
            while curr_count[str[start]] > 1:
                if curr_count[str[start]] > 1:
                    curr_count[str[start]]--
                start++
            len_window = j - start + 1
            if min_len > len_window:
                min_len = len_window
                start_index = start
    return str.substr(start_index, min_len)
```