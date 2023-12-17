## Problem Statement

You are required to write a function `generateBrackets` to print all the valid combinations of opening and closing brackets for a given `n` pairs of brackets.

**Function Signature:**
```cpp
void generateBrackets(string output,int n,int open,int close,int i)
```

## Input
- An integer `n` representing the number of pairs of brackets.

## Output
- All the valid combinations of opening and closing brackets.

## Example

```cpp
Input
n = 2

Output
(())
()()
```


## Pseudo Code

```cpp
function generateBrackets(output, n, open, close, i):
    if i is equal to 2*n:
        print output
        return

    if open is less than n:
        generateBrackets(output + '(', n, open+1, close, i+1)

    if close is less than open:
        generateBrackets(output + ')', n, open, close+1, i+1)


function main():
    output = ""
    n = input from user
    call generateBrackets(output, n, 0, 0, 0)
    return 0

```