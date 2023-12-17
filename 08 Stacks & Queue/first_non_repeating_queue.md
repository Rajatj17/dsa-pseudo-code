## Problem Statement
You are given a stream of characters. Write a program to find the first non-repeating character in the running stream.

You need to implement a function `findFirstNonRepeatingCharacter` to process the given input and return the first non-repeating character in the running stream. If no non-repeating character is found, return -1.

## Input
- The program takes a stream of characters as input until a dot '.' is encountered.

## Output
- For each character in the stream, print the first non-repeating character in the running stream. If no non-repeating character is found, print -1.

## Example
Input:
```
a b c d b a c e .
```

Output:
```
a
a
a
c
c
c
c
e
```

## Pseudo code for the given c++ code
``` 
function findFirstNonRepeatingCharacter():
    q  <- new queue of characters
    freq[] <- an array of size 27 initialized with 0
    
    ch <- input character
    
    while ch != '.':
        q.push(ch)
        freq[ch - 'a']++
        
        while q is not empty:
            idx <- q.front() - 'a'
            if freq[idx]>1:
                q.pop()
            else:
                output q.front()
                break
        
        if q is empty:
            output -1

        ch <- input character
    
    return
```