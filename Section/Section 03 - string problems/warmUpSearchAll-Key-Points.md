## Problem Statement
You are given a string `big` and a string `small`. Your task is to find all occurrences of the string `small` within the string `big` and return a vector containing the indices of the occurrences.

## Input
- A string `big` (1 <= |big| <= 10^5), where |big| represents the length of the string `big`.
- A string `small` (1 <= |small| <= 10^3), where |small| represents the length of the string `small`.

## Output
- A vector of integers containing the indices of all occurrences of the string `small` within the string `big`.

## Example
Input:
big = "abababa"
small = "aba"

Output:
[0, 2, 4]

## Explanation
The string "aba" appears at indices 0, 2, and 4 in the string "abababa".

## Pseudo code
```
FUNCTION stringSearch(big, small)
    result = empty vector
    index = FIND(small) in big
    WHILE index != -1
        result.ADD(index)
        index = FIND(small) in big starting from (index+1)
    END WHILE
    RETURN result
END FUNCTION
```