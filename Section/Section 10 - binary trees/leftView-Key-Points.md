## Problem Statement

You are given a binary tree. Write a function `leftView` to get the left view of the tree. The left view of a binary tree is a set of nodes visible when the tree is visited from the left side. 

Function Signature: 
```cpp
vector<int> leftView(Node* root)
```

### Input
- Node* root: Pointer to the root of the binary tree

### Output
- Returns a vector of integers containing the left view of the binary tree

## Example

Input: 
```
      4
    /   \
   2     6
  / \   / \
 1   3 5   7
```

Output: 
```
[4, 2, 1]
```

Explanation:
- The left view of the tree is [4, 2, 1].