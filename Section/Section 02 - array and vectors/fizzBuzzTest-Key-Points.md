## Problem Statement
You are given a number `n`. Implement a function `fizzbuzz` to return a list of strings from 1 to `n` where:
* For multiples of 3, add "Fizz" to the list.
* For multiples of 5, add "Buzz" to the list.
* For multiples of both 3 and 5, add "FizzBuzz" to the list.
* For all other numbers, add the number itself to the list.

## Example

Input:
n = 15

Output:
["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

## Pseudocode
```
function fizzbuzz(n):
    result = empty vector of strings
    for i = 1 to n
        if i is multiple of 15
            append "FizzBuzz" to result
        else if i is multiple of 5
            append "Buzz" to result
        else if i is multiple of 3
            append "Fizz" to result
        else
            append string representation of i to result
    return result
```