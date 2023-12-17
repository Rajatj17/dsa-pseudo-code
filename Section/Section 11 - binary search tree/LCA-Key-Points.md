# Lowest Common Ancestor

You are given a binary tree and two nodes `a` and `b`. Your task is to find the lowest common ancestor of the nodes `a` and `b`.

## Pseudo code
```plaintext
Class Node
    - data
    - left
    - right

function lca
    Input: root, a, b
    Output: Node

    if root is NULL
        return NULL
    
    if root's data is equal to a or b
        return root
    
    leftans = lca(root's left, a, b)
    rightans = lca(root's right, a, b)

    if leftans is not equal to NULL and rightans is not equal to NULL
        return root
    
    if leftans is not equal to NULL
        return leftans
    return rightans
```

## Example
Input:
```
root = 1
       / \
      2   3
     / \
    4   5
a = 4, b = 5
```

Output:
```
2
```

In this example, the lowest common ancestor of nodes 4 and 5 is node 2.