## Problem Statement
You are given a string. You need to find the first repeated character in the string and return it. If there are no repeated characters, return '\0'.

Write a function `firstRepeatChar` to find the first repeated character in the given input string.

## Input
- A string `input` of length n (1 ≤ n ≤ 10^5).

## Output
- The first repeated character in the string. If there are no repeated characters, return '\0'.

## Example
``` 
Input: "abcdefga"
Output: 'a'

Input: "abcdefgh"
Output: '\0'
```


## Pseudo Code
``` 
function firstRepeatedChar(input : string) -> char:
    m = new unordered_map<char, bool>
    for s in input:
        if m.count(s) == 0:
            m[s] = 1
        else:
            return s
    return '\0'
```