## Problem Statement
You are given a string `palindrome` which is a palindrome. A palindrome is a word that reads the same backward as forward. The task is to replace exactly one character of the palindrome with any lowercase English alphabet character, such that the resulting string is not a palindrome.

Write a function `breakPalindrome` to solve the problem. You need to implement the function with the following signature:
```cpp
string breakPalindrome(string palindrome);
```

Your function should return the updated string after replacing exactly one character to break the palindrome. If it is not possible to do so, return an empty string.

## Example
Input:
```cpp
palindrome = "abccba"
```
Output:
```cpp
"aaccba"
```

Input:
```cpp
palindrome = "a"
```
Output:
```cpp
""
```

Input:
```cpp
palindrome = "aaa"
```
Output:
```cpp
"aab"
```

## Pseudo code for `breakPalindrome`

```plaintext
function breakPalindrome(palindrome: string) -> string
    if size of palindrome is 1
        return ""
    
    count = 2D array of size 26
    
    firstNonA = -1
    
    for i = 0 to size of palindrome
        count[palindrome[i] - 'a'].push_back(i)
        
        if firstNonA == -1 and palindrome[i] != 'a'
            firstNonA = i
    
    if count of 'a' is greater than or equal to size of palindrome - 1
        palindrome[count['a'].back()] = 'b'
    else
        palindrome[firstNonA] = 'a'
    
    return palindrome
```