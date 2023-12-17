## Problem Statement
You are given a function `mystrtok` which takes a string and a delimiter as input and returns a *token* (a substring of the input string) based on the delimiter. You need to implement the `mystrtok` function.

## Input
- A string `str` representing the input string.
- A character `delim` representing the delimiter.

## Output
- The function should return a token based on the delimiter.

## Function Signature
```cpp
char *mystrtok(char *str, char delim)
```

## Example
```cpp
char s[1000];
cin.getline(s,1000);

char *token =  mystrtok(s,' ');

while(token!=NULL){
      cout<<token <<endl;
      token = mystrtok(NULL,' ');
}
```

### Input
```
Hello World This is a Test
```

### Output
```
Hello
World
This
is
a
Test