## Problem Statement
You are given a string containing digits of a mobile keypad. Create a program to print all possible combinations of letters that could represent the given input number. 

A mapping of digits to letters is given below:
1: "", 2: "ABC", 3: "DEF", 4: "GHI", 5: "JKL", 6: "MNO", 7: "PQRS", 8: "TUV", 9: "WXYZ"

Write a function `printKeypadOutput` which takes the input string, output string and an index i as parameters and recursively prints all possible combinations of letters.  

## Input
- A string containing digits from 2 to 9.

## Output
- Print all possible combinations of letters that could represent the given input number.

## Example
Input:
```
23
```

Output:
```
AD
AE
AF
BD
BE
BF
CD
CE
CF
```

## Pseudo code
```
function printKeypadOutput(input: string, output: string, i: int=0):
    if input[i] is null:
        print output
        return
    
    current_digit = input[i] - '0'
    if current_digit equals 0 or current_digit equals 1:
        printKeypadOutput(input, output, i+1)
    
    for k from 0 to length of keypad[current_digit] - 1:
        printKeypadOutput(input, output + keypad[current_digit][k], i+1)
    return
```