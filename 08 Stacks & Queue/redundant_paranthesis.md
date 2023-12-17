## Problem Statement
You are given a mathematical expression in the form of a string. You need to check if the expression contains any redundant or unnecessary parenthesis. A redundant parenthesis is defined as containing nothing but operators and no operands between them. You need to implement a function `checkRedundant` to check if the given expression contains any redundant parenthesis.

## Example
```plaintext
Input: "((a+b)+c) + ((d*e))"
Output: Contains Redundant Parenthesis

Input: "(a+b)+(c+d)"
Output: Does not contain any redundant parenthesis
```

## Pseudo Code
```plaintext
function checkRedundant(str : string) -> boolean
    stack s
    for each character ch in str
        if ch is not equal to ')'
            push ch to stack s
        else
            operator_found = false
            while s is not empty and top of s is not equal to '('
                top = top element of s
                if top is '+' or top is '-' or top is '*' or top is '/'
                    set operator_found to true
                pop from s
            pop from s // to remove the opening bracket
            if operator_found is false
                return true
    return false

string str = "((a+b)+c) + ((d*e))"
if checkRedundant(str)
    output "Contains Redundant Parenthesis"
else
    output "Does not contain any redundant parenthesis"
```