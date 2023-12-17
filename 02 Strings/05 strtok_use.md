## Problem Statement
You are given a string containing words separated by spaces. Your task is to tokenize the input string and print each word on a new line.

## Input
- A string containing words separated by spaces.

## Output
- Each word should be printed on a new line.

## Example
Input
```
Hello world, how are you doing today?
```

Output
```
Hello
world,
how
are
you
doing
today?
```

## Pseudo code
```
1. Create a character array input of size 1000
2. Read the input string into the array using cin.getline(input,1000)
3. Use strtok() function to tokenize the input string by space
4. Initialize a pointer token with the result of strtok(input, " ")
5. Use a loop to iterate over each token and print it, update the token with strtok(NULL, " ") at the end of the loop
6. End
```