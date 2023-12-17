## Problem Statement
You are given a list of non-negative integers, `numbers`. You need to concatenate the numbers in such a way that the resulting number is as large as possible.

Write a function `concatenate` to achieve this. The function should take a vector of integers and return a string representing the largest possible number after concatenation.

### Input
- A vector of integers, `numbers` ( 1 <= numbers[i] <= 10^9)

### Output
- A string representing the largest possible number after concatenation

### Example
```cpp
Input: numbers = [10, 5, 78]
Output: "78510"

Input: numbers = [3, 30, 34, 5, 9]
Output: "9534330"
```

## Pseudo code
```
1. function compare(s1,s2)
    return s1 + s2 > s2 + s1

2. function concatenate(numbers)
    output = []  // an empty array of strings
    
    for no in numbers
        output.push_back(convertToString(no))
    
    sort(output.begin(),output.end(),compare)
    
    ans = ""  // an empty string
    for x in output
        ans += x
    
    return ans
```