## Problem Statement

You are given a document and a list of words. Your task is to find if the given words are present in the document and mark them as True or False.

You need to perform the following operations:

1. Create a trie of words from the given list.
2. Search for the words in the document using a helper function.
3. Output whether each word is present in the document or not.

## Example Input

### Input
```cpp
string document  ="little cute cat loves to code in c++, java & python";
vector<string> words{"cute cat", "ttle", "cat","quick","big"};
documentSearch(document,words);
```

### Output
```
cute cat : True
ttle : True
cat : True
quick : False
big : False
```

## Pseudo code

```plaintext
class Node{
    char data
    unordered_map<char,Node*> children
    bool isTerminal
}

class Trie{
    Node*root
    insert(string word)
}

searchHelper(Trie t, string document, int i, unordered_map<string,bool> &m )

documentSearch(string document, vector<string> words)
```
