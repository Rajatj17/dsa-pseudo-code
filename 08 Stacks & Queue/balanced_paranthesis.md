## Problem Statement

You are given a string containing characters '{', '}', '(', ')', '[', and ']'. You need to implement a function `isBalanced` to determine if the input string has balanced parentheses. A string is considered to have balanced parentheses if the opening brackets are closed by the same type of closing brackets in the correct order. It should return true if the string has balanced parentheses, and false otherwise.

## Example

Input: "{ a + (b+c) + ([d+e]*f)) } + k`"

Output: Not Balanced

## Pseudo code

```plaintext
function isBalanced(input: string) -> boolean
    stack s
    for each character ch in input do
        case ch of
            '(' or '{' or '[': 
                push ch to stack s
            ')': 
                if s is not empty and s.top() is '(': 
                    pop from stack s
                else:
                    return false
            ']': 
                if s is not empty and s.top() is '[': 
                    pop from stack s
                else:
                    return false
            '}': 
                if s is not empty and s.top() is '{': 
                    pop from stack s
                else:
                    return false
            default:
                continue
    done
    
    if stack s is empty:
        return true
    else:
        return false
end function
```