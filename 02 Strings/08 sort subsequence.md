## Problem Statement
You are given a string `s`. Your task is to generate all possible sorted subsequences of the string and print them in lexicographically sorted order.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (For example, "ace" is a subsequence of "abcde" while "aec" is not).

## Input
- A string `s` (1 <= |s| <= 20) , containing only lowercase English alphabets.

## Output
- Print all possible sorted subsequences of the given string `s` in lexicographically sorted order separated by commas.

## Example
Input:
```
abc
```

Output:
```
a,ab,abc,ac,b,bc,c,
```

Input:
```
xy
```

Output:
```
x,xy,y,
```

## Pseudo code for the given C++ code
```plaintext
function subsequence(s: string, o: string, v: vector of strings) 
    if size of s is 0 then
        add o to v
        return
    end if
    set ch as first character of s
    set reduced_input as s excluding first character
    subsequence(reduced_input, o + ch, v)
    subsequence(reduced_input, o , v)
end function

function compare(s1: string, s2: string) 
    if length of s1 is equal to length of s2 then
        return s1 < s2
    end if
    return s1.length() < s2.length()
end function

function main()
    take input string s
    create an empty vector of strings v
    set output as empty string
    call subsequence(s, output, v)
    sort v using compare function
    for each string s in v
        output s followed by ","
    end for
end function
```