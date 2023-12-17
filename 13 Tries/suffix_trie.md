### Problem Statement

You are given a string and its suffixes. You need to create a Suffix Trie data structure to efficiently search whether a given suffix is present in the string or not.

You need to implement the Suffix Trie data structure to store the given string and check if the given suffixes are present in the string.

Write a function `insert` that takes a string as input parameter to insert the given string in the trie, and a function `search` that takes a suffix as input and returns true if the suffix is present in the string, otherwise false.

### Input

You will be given a string `input` of length N (1 ≤ N ≤ 10^4) and an array of suffixes `suffixes` of length M (1 ≤ M ≤ 10^3), where each suffix is a string of length K (1 ≤ K ≤ 100).

### Output

You need to output "yes" if the given suffix is present in the string, otherwise "no" for each suffix in the array `suffixes`.

### Example

Input:

```
input = "hello"
suffixes = ["lo", "ell", "hello"]
```

Output:

```
yes yes no
```


### Pseudo code

```plaintext
class Node{
    data
    unordered_map m
    isTerminal
};

class SuffixTrie{
    root
    SuffixTrie(){
        root = new Node('\0')
    }

    void insert_helper(word){
        temp = root
        for ch in word:
            if temp.m[ch] is not present:
                create a new node with character ch
                temp.m[ch] = new node
            temp = temp.m[ch]
        temp.isTerminal = true
    }

    bool search(word){
        temp = root
        for ch in word:
            if temp.m[ch] is not present:
                return false
            temp = temp.m[ch]
        return temp.isTerminal
    }

    void insert(word){
        for i=0 to length of word-1:
            insert_helper(substring from i to end of word)
    }
}

main(){
    input = "hello"
    suffixes = ["lo", "ell", "hello"]
    t = new SuffixTrie
    t.insert(input)
    for sf in suffixes:
        if t.search(sf):
            output "yes"
        else:
            output "no"
}
```