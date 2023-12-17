### Problem Statement
You are given two strings `str1` and `str2`. Your task is to find the minimum number of operations required to convert `str1` to `str2`. The allowed operations are: insert a character, remove a character, or replace a character.

You need to implement a function `editDistance` that takes in two strings as input and returns the minimum number of operations required.

### Example
#### Input
str1 = "horse", str2 = "ros"
#### Output
3
#### Explanation
The minimum number of operations required is 3. We can perform the following operations:
1. Replace 'h' with 'r'
2. Remove 'o'
3. Remove 'e'

#### Input
str1 = "intention", str2 = "execution"
#### Output
5
#### Explanation
The minimum number of operations required is 5. We can perform the following operations:
1. Remove 'i'
2. Replace 'n' with 'x'
3. Remove 't'
4. Remove 'e'
5. Remove 'n'

### Pseudo code
```
function minDistance(str1, n1, str2, n2, dp)
    if n1 == 0 
        return n2
    if n2 == 0 
        return n1
    if dp[n1][n2] != -1 
        return dp[n1][n2]
    if str1[n1 - 1] == str2[n2 - 1] 
        return dp[n1][n2] = minDistance(str1, n1 - 1, str2, n2 - 1, dp)
    else 
        op1 = minDistance(str1, n1, str2, n2 - 1, dp) // insert
        op2 = minDistance(str1, n1 - 1, str2, n2, dp) // remove
        op3 = minDistance(str1, n1 - 1, str2, n2 - 1, dp) // replace
        return dp[n1][n2] = 1 + min(op1, min(op2, op3))

function editDistance(str1, str2)
    initialize dp array of size 500x500 with -1
    n1 = size of str1
    n2 = size of str2
    ans = minDistance(str1, n1, str2, n2, dp)
    return ans
```