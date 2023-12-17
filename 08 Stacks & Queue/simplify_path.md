## Problem Statement

You are given a string representing an absolute path for a file (Unix-style), you need to simplify it. Or in other words, convert it to the canonical path.

In a Unix-style file system, a period . refers to the current directory. Furthermore, double period .. moves the directory up a level.

For more information regarding the canonical path, you can refer [this](https://en.wikipedia.org/wiki/Path_(computing)) 

Implement function `string simplifyPath(string path)` where 
- path is a String represents an absolute path for a file (Unix-style)
- The function should return a String which represents the simplified canonical path

## Example

Input
```
path = "/../x/y/../z/././w/a///../../c/./"
```
Output
```
"/x/z/c"
```

## Constraints
- The given path does not contain leading or trailing whitespace.
- The Unix file system can't define a file path that contains multiple consecutive slashes like "/home//foo/".

## Pseudo Code

```pseudo
function simplifyPath(path):
    tokens = tokenizePath(path)
    stack = empty vector

    if(path[0] == '/'):
        stack.push_back("")

    for token in tokens:
        if(token == ".."):
            if(stack.size() == 0 or stack[stack.size()-1] == ".."):
                stack.push_back("..")
            else if(stack[stack.size()-1] != ""):
                stack.pop_back()
        else:
            stack.push_back(token)

    if(stack.size() == 1 and stack[0] == ""):
        return "/"

    canonicalPath = joinTokens(stack)
    return canonicalPath

function tokenizePath(path):
    iss = new istringstream(path)
    tokens = empty vector

    while getting next line from iss which is token using '/' as delimiter:
        if(token == "." or token == ""):
            continue
        tokens.push_back(token)
    return tokens

function joinTokens(stack):
    oss = new ostringstream
    i = 0

    for token in stack:
        if(i != 0):
            oss << "/"
        oss << token
        i++
    
    return oss.str()
```