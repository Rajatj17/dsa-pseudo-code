## Problem Statement
You are given a class `Node` representing a node in a binary search tree. The class has the following attributes:
- `int key` which represents the key of the node
- `Node *left` which represents the left child of the node
- `Node *right` which represents the right child of the node
- `Node *parent` which represents the parent of the node

You need to write a function `findInOrderSuccessor` to find the in-order successor of a given node in a binary search tree.

## Input
- A pointer to the `inputNode` of type `Node` for which the in-order successor needs to be found.

## Output
- The in-order successor of the input node.

## Example
```plaintext
Input:
        20
       /  \
     10   30
    /  \
   5   15
        /
       12

Output:
In-order successor of inputNode with key 5 is 10
In-order successor of inputNode with key 10 is 12
In-order successor of inputNode with key 12 is 15
In-order successor of inputNode with key 15 is 20
```

## Pseudo code
```plaintext
function findInOrderSuccessor(inputNode: Node) -> Node:
    if inputNode.right exists:
        temp = inputNode.right
        while temp.left exists:
            temp = temp.left
        return temp
    else:
        parent = inputNode.parent
        temp = inputNode
        while parent exists and temp is the right child of its parent:
            temp = parent
            parent = temp.parent
        return parent
```

The given C++ code can be converted to pseudo code as shown above.