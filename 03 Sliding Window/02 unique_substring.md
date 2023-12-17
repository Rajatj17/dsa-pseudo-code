## Problem Statement

You are given a string, you need to find the length of the longest substring without repeating characters. 

Write a function `unique_substring` to find and return the longest substring without repeating characters in the given input. 

## Inputs

The input will be a string consisting of lowercase and/or uppercase letters.

## Output

The function should return a string, which is the longest substring without repeating characters.

## Example

Input:
```
"abcabcbb"
```

Output:
```
"abc"
```

Input:
```
"bbbbb"
```

Output:
```
"b"
```

Input:
```
"pwwkew"
```

Output:
```
"wke"
```

## Pseudo code

```plaintext
function unique_substring(str: string) -> string:
    i = 0
    j = 0
    window_len = 0
    max_window_len = 0
    start_window = -1
    m = empty unordered map

    while j < str.length():
        ch = str[j]

        if m contains ch and m[ch] is greater than or equal to i:
            i = m[ch] + 1
            window_len = j - i

        m[ch] = j
        window_len++
        j++

        if window_len is greater than max_window_len:
            max_window_len = window_len
            start_window = i

    return a substring of str from start_window to start_window+max_window_len
```
Note: The pseudo code provided is written in a generic programming language and may not directly translate to runnable code.