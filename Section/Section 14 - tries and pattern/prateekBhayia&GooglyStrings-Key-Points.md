## Problem Statement

You are given a list of strings, you have to find the strings that make use of atleast 2 other strings in the list. A string s is said to be made of at least 2 strings if it is found by concatenating at least two strings from the given list of strings.

Consequently, you are required to create a function `googlyStrings` to compute the list of strings found which satisfy the given criterion. 

The class Trie and Node are provided to facilitate your solution.

## Input
- A list of strings `strings` (1 ≤ |strings| ≤ 100)
- Each string consists of only lowercase English letters

## Output
- Return a list of strings formed by concatenating at least two strings from the given list of strings.

## Example

Input
```cpp
strings = ["love", "loves", "problem", "solving", "pro", "problems"]
```

Output
```cpp
["loves","problems"]
```

## Pseudo Code
```cpp
class Node{
    char ch
    bool isTerminal
    unordered_map<char,Node*> children
}

class Trie{
    Node*root
    Trie():
        root = new Node('\0')
    Node*getRoot()
    void addWord(string s)
}

bool isSpecial(Trie t,Node*root, string s,int i,int cnt):
    if i equals to length of s:
        "Count is " + cnt + 1 + "  and " + root->ch
        return root->isTerminal and (cnt + 1) >=2
    char ch = s[i]
    if(root->children does not contain ch):
        return false
    root = root->children[ch]
    if(root->isTerminal):
        remaining = isSpecial(t,t.getRoot(),s,i+1,cnt+1)
        if(remaining equals to true):
            return true
    return isSpecial(t,root,s,i+1,cnt)

vector<string> googlyStrings(vector<string> strings):
    Trie t
    for auto str in strings:
        t.addWord(str)
    output = {}
    for auto s in strings:
        cnt = 0
        temp = t.getRoot()
        if(isSpecial(t,temp,s,0,cnt)):
            output.push_back(s)
    return output
```
The above pseudo code is equivalent to the provided C++ code and can be used to implement the `googlyStrings` function in any programming language.