# Word Search using Trie

## Problem Statement
Given a 2D board of characters and a list of words, find all the words in the list that can be formed by a sequence of adjacent characters on the board. Each adjacent letter must be connected, in any direction, to the next letter. The same letter cell may not be used more than once in a word.

Implement the `Word Search` algorithm using Trie for efficient word lookups.

## Example

### Input
```cpp
string words[] = {"SNAKE", "FOR", "QUEZ", "SNACK", "SNACKS", "GO","TUNES","CAT"};

char board[M][N] = { { 'S', 'E', 'R' ,'T'}, 
                    { 'U', 'N', 'K' ,'S'},
                    { 'T', 'C', 'A' ,'T'} };
```

### Output
```
SNAKE
SNACK
CAT
```

## Pseudo code
```plaintext
Class Node{
    char s
    map children
    string word
    bool isTerminal
}

Node(char s)

Class Trie{
    Node root

    Trie()

    void addWord(string word)
}

void dfs(char board[M][N], Node node, int i, int j, bool visited[M][N], set<string> &output)
    
Main:
    Initialize words array and the board
    Create a Trie and insert all words into it
    Initialize an empty set output to store the found words
    Initialize a 2D array 'visited' to keep track of visited cells

    For each cell (i,j) on the board:
        Call dfs function to search for words starting from cell (i,j)
    
    Print the words in the output set
```
The pseudo code represents the main C++ code using the Trie data structure to implement the word search algorithm.