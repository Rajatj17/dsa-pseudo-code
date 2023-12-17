## Problem Statement

You are given a phone number as a string `phoneNumber` and a list of strings `words`. Your task is to find all the words in the list that can be found "in" the given phone number using the letters associated with each digit on a standard phone keypad. Note that a word can be found "in" the phone number even if it is not equal to the phone number itself.

Write a function `filterNames` to solve the problem, which takes a string `phoneNumber` and a vector of strings `words`, and returns a vector of strings containing all the words that can be found "in" the given phone number.

### Input
- String `phoneNumber` representing a phone number (1 <= |phoneNumber| <= 10^4)
- A vector of strings `words` representing the list of words (1<= |words| <= 10^3)

### Output
- Return a vector of strings containing all the words that can be found "in" the given phone number.

## Example
```cpp
Input:
phoneNumber = "23"
words = {"ad","ae","af","bd","be","bf","cd","ce","cf"}

Output:
{"ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"}

Input:
phoneNumber = "456"
words = {"dog", "cat", "bat", "cod"}

Output:
{"dog", "cod"}
```

PS: The pseudo code of the provided c++ code is as follows:

```plaintext
Define a string array keypad[] representing the phone keypad letters associated with each digit.

Define a class Node with character ch, boolean isTerminal, string s, and an unordered_map of characters to Nodes representing the children of the current node.

Define a class Trie with a root node initialized with character '\0'.

Define a method addWord to add a word to the trie.

Define a method validWords to recursively find the valid words in the phone number using the trie.

Define a function filterNames which takes a phoneNumber and a vector of words as input and returns the valid words in the phone number using the given words.
```