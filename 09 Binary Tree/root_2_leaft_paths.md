## Problem Statement
You are given a binary tree. Your task is to print all the root to leaf paths in the binary tree.

You are required to complete the function `printRoot2LeafPaths` that takes a binary tree as input and prints all the root to leaf paths. The binary tree is represented by the class `node` where each node contains an integer data and pointers to its left and right child.

### Input
- The function `printRoot2LeafPaths` takes the root of a binary tree as input.

### Output
- The function should print all the root to leaf paths on separate lines.

## Example
#### Input
```
        1
       / \
      2   3
     / \
    4   5
     \
      7
```

#### Output
```
1->2->4  (Path to leaf 4)
1->2->5->7  (Path to leaf 7)
1->3  (Path to leaf 3)
```

## Pseudocode
```plaintext
function printRoot2LeafPaths(root, path):
    if root is NULL:
        return
    if root has no left and right child:
        for each data in path:
            print data -> (with arrow)
        print root.data
        print new line
        return
    add root.data to path
    call printRoot2LeafPaths on root.left with path
    call printRoot2LeafPaths on root.right with path
    remove last element from path
    return
```