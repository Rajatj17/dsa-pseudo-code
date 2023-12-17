## Problem Statement

You are given a string `str` and your task is to compress the string by counting the number of occurrences of each character. If the compressed string is not smaller than the original string, then return the original string.

You need to write a function `compressString` to accomplish the given task.

## Example

Input:
```
str = "aaabbccccdd"
```

Output:
```
"a3b2c4d2"
```

Input:
```
str = "abcde"
```

Output:
```
"abcde"
```

## Pseudo code

```
function compressString(str : string) -> string:
    n = length of str
    output = ""

    for i = 0 to n-1:
        count = 1

        while i < n - 1 and str[i] == str[i + 1]:
            count++
            i++

        output += str[i] + count

    if length of output > length of str:
        return str
    else:
        return output
```