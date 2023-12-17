## Problem Statement
You are given a string `s` consisting of characters 'H' and 'O'. You need to help Bob to win the game of wits. Bob gets a score equal to the number of 'O's if he wins. If he loses he gets negative of the number of 'H's in the worst case. You need to find the best way for Bob to play in order to maximize his score and let him know the outcome of the game.

Write a function `GameOfWits` to return the following:
* A character representing if Bob wins ('O') or loses ('H')
* The number of points Bob scores

### Input
- A string `s` of length n (1 ≤ n ≤ 100) consisting of characters 'H' and 'O'

### Output
- A pair of character and integer, where the character represents the outcome of the game ('O' for win, 'H' for lose) and the integer represents the score Bob gets

## Example
Input:
```
s = "HOO"
```
Output:
```
{'O', 2}
```

Input:
```
s = "HHHOOOH"
```
Output:
```
{'H', 4}
```