## Problem Statement

You are required to implement the `isBST` function that will take the root of a binary tree as input and check whether the given binary tree is a Binary Search Tree (BST) or not. The function should return true if the tree is a BST, and false otherwise.

Complete the given pseudo code of the isBST function:
```
BOOLEAN_FUNCTION isBST(Node* root){
    // COMPLETE THIS METHOD
}
```

### Input:
- The function takes the root of a binary tree as input.

### Output:
- The function should return true if the tree is a BST, and false otherwise.

### Constraints:
- The tree can have a maximum of 10^5 nodes.
- The values of nodes will be integers.
- The values of the keys will be unique.

## Example

#### Input
Let's assume the following binary tree:
```
    4
   / \
  2   6
 / \   \
1   3   7
```

#### Output
For the given tree, the output will be true as the tree is a BST.

#### Input
Let's assume the following binary tree:
```
    3
   / \
  5   2
 / \    
1   4
```

#### Output
For the given tree, the output will be false as the tree is not a BST.

## Pseudo code
```
BOOLEAN_FUNCTION isBST(Node* root){
    if (root == NULL)
        return TRUE
    return isBSTUtil(root, INT_MIN, INT_MAX)
}
```
```
INT_FUNCTION isBSTUtil(Node* node, int min, int max){
    if (node == NULL)
        return TRUE
    
    if (node->key < min || node->key > max)
        return FALSE
    
    return isBSTUtil(node->left, min, node->key) && isBSTUtil(node->right, node->key, max)
}
```