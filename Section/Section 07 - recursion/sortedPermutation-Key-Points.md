## Problem Statement

You are given a string, you need to generate all possible permutations of the string in lexicographically sorted order.

## Input

A string `s` representing the input string.

## Output

A vector of strings where each string represents a permutation of the input string in lexicographically sorted order.

## Example

Input 

```
s = "abc"
```

Output

```
["abc", "acb", "bac", "bca", "cab", "cba"]
```

Input 

```
s = "aab"
```

Output

```
["aab", "aba", "baa"]
```

Input 

```
s = "aaa"
```

Output

```
["aaa"]
```

## Pseudo code

```
function find_Permutations(inp, i) 
    if inp[i] == '\0'
        convert inp to string str
        push str to v
        return
    for j=i to n
        swap inp[i] and inp[j]
        call find_Permutations(inp, i+1)
        swap inp[i] and inp[j]

function findSortedPermutations(s)
    clear v
    n = length of s
    declare char array inp of size n+1
    for i=0 to n-1
        inp[i] = s[i]
    inp[n] = '\0'
    call find_Permutations(inp, 0)
    
    declare set st
    for i=0 to length of v
        insert v[i] to st
    clear v
    for x in st
        push x to v
    return v
```