## Problem Statement
You are given a C++ code that implements a TRIE data structure. A TRIE is a tree-like data structure that stores a dynamic set of strings. It is commonly used to store and retrieve a dictionary of words. Your task is to write a pseudo code that initializes a TRIE, inserts a given set of words into the TRIE, and performs search operations for a given set of words in the TRIE.

## Input
- A string containing the words to be inserted into the TRIE.
- An array of strings containing the words for which search operations need to be performed in the TRIE.

## Output
- The pseudo code should include the implementation of initializing a TRIE, inserting the given words into the TRIE, and performing search operations for the given words in the TRIE.

## Example
```cpp
Initialize the Trie:
    root = new Node('\0')

Insert words into the Trie:
    for each word in input:
        temp = root
        for each character ch in word:
            if temp->m does not contain key ch:
                create a new Node n with character ch
                temp->m[ch] = n
            temp = temp->m[ch]
        temp->isTerminal = true

Perform search operations in the Trie:
    for each word in queries:
        temp = root
        for each character ch in word:
            if temp->m does not contain key ch:
                return false
            temp = temp->m[ch]
        return temp->isTerminal
```

## Pseudo Code
```plaintext
//Build a Prefix Tree - Trie
class Node{
public:
    char data;
    map<char,Node*> m;
    bool isTerminal;

    Node(char d){
        data = d;
        isTerminal = false;
    }
};


class Trie{

    Node*root;
public:
    Trie(){
        root = new Node('\0');
    }

    // Insert a word into the Trie
    void insert(string word){
        Node* temp = root;
        for each character ch in word:
            if temp->m does not contain key ch:
                create a new Node n with character ch
                temp->m[ch] = n
            temp = temp->m[ch]
        temp->isTerminal = true
    }

    // Search for a word in the Trie
    bool search(string word){
        Node*temp = root;
        for each character ch in word:
            if temp->m does not contain key ch:
                return false
            temp = temp->m[ch]
        return temp->isTerminal
    }
};

// Main function
main():
    input = "this is a suffix trie"
    queries[] = "fix"
    Trie t
    for each word in input:
        t.insert(word)
    for each word in queries:
        result = t.search(word)
        print result
```