## Problem Statement
You are given a sentence where words are separated by spaces. Your task is to parse the sentence to extract individual words and then print all the words separated by commas.

## Input
- A single line containing a string of words separated by spaces.

## Output
- A single line containing all the individual words extracted from the input string, separated by commas.

## Example
Input
```
this is a sunny day
```

Output
```
this,is,a,sunny,day,
```

## Pseudocode
```
1. Read the input string
2. Create a string stream object
3. Initialize a vector to store tokens
4. Iterate through the string stream using >> and << operators
    - If a token is extracted, push it to the vector of tokens
5. Print all the tokens separated by commas
```