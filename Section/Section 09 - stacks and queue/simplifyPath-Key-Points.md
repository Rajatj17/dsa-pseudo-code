## Problem Statement
You are given a string `path`, which is an absolute path to a file or directory in Unix-style file systems. In this problem, `path` always starts with a `/`, and does not end with a `/`. Additionally, the Unix file system automatically ignores multiple consecutive slashes and two dots `..`, but can sometimes contain one or two dots `.`.


## Example
Input: "/home/"

Output: "/home"

Input: "/../"

Output: "/"

Input: "/home//foo/"

Output: "/home/foo"

Input: "/a/./b/../../c/"

Output: "/c"


## Pseudo code
```
1. Initialize an input string stream with the string path
2. Initialize an empty string token
3. Initialize an empty vector of strings tokens
4. Initialize a boolean rootdir as true if path[0] is equal to '/'
5. Loop through the string stream using getline(iss, token, '/')
    - If token is not equal to "." and not an empty string, then push it into the tokens vector
6. Initialize an empty vector of strings stack
7. If rootdir is true, push an empty string into the stack
8. Loop through the tokens 
    - If the token is ".."
        - If the stack size is 0 or the last element in the stack is "..", then push the token into the stack
        - Else if the last element in the stack is not empty, pop the last element from the stack
    - Else, push the token into the stack
9. If the stack size is 1 and the first element is an empty string, return "/"
10. Initialize an empty string oss
11. Loop through the stack
    - If i is not equal to 0, append "/" to oss
    - Increment i
    - Append the current token to oss
12. Return oss as the result
```