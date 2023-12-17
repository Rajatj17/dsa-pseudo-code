## Problem Statement
You are given two integers A and B, and you have to find A^B modulo 10^9 + 7.

Write a function `powerModulo` to find A^B modulo 10^9 + 7 using the following function:

```plaintext
long long int solve(int A, int B, long C)
```

## Input
- Two integers A and B, where (1 ≤ A, B ≤ 10^9)

## Output
- Return the value of A^B modulo 10^9 + 7.

## Example
Input
```plaintext
A = 3, B = 5
```
Output
```plaintext
242
```

Input
```plaintext
A = 7, B = 10
```
Output
```plaintext
282475249
```

## Pseudo code
```plaintext
function solve(A, B, C) 
    if A == 0
        return 0
    if B == 0
        return 1

    y = 0
    if B is odd
        y = A % C
        y = (y * solve(A, B - 1, C) % C) % C
    else
        y = solve(A, B / 2, C)
        y = (y * y) % C

    return (y + C) % C

function powerModulo(a, b)
    mod = 10^9 + 7
    return solve(a, b, mod)
```