## Problem Statement
You need to write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters and that you are given the "true" length of the string. 
## Inputs
- A string of characters.

## Outputs
- The input string with all spaces replaced with '%20'.

## Example
``` 
Input:
"Mr John Smith"
Output:
"Mr%20John%20Smith"
``` 

## Pseudo code
```
function replace_space(str)
    spaces = 0
    for i = 0 to length of str - 1
        if str[i] == ' '
            spaces += 1
    idx = length of str + 2*spaces
    str[idx] = '\0'
    for i = length of str - 1 to 0
        if str[i] == ' '
            str[idx-1] = '0'
            str[idx-2] = '2'
            str[idx-3] = '%'
            idx = idx - 3
        else
            str[idx-1] = str[i]
            idx--
```