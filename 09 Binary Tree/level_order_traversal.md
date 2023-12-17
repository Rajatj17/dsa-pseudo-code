## Problem Statement
You are given a binary tree and you have to implement the level order traversal of the tree and print the nodes at each level on a new line.

## Input
- The input will be a sequence of integers representing the nodes of the binary tree. The input will follow the pre-order traversal of the tree where `-1` denotes a null node.

## Output
- The output will be the level order traversal of the tree where nodes at each level are printed on a new line.

## Example
### Input
1 2 4 -1 -1 5 7 -1 -1 -1 3 -1 6 -1 -1

### Output
1
2 3
4 5 6
7

## Pseudo Code
```plaintext
class node{
    int data
    node*left
    node*right

    node(int d){
        data = d
        left = NULL
        right = NULL
    }
}

node* buildTree()
    d = input()
    if d is -1
        return NULL
    n = new node(d)
    n->left = buildTree()
    n->right = buildTree()
    return n

void levelOrderPrint(root)
    queue<node*> q
    q.push(root)
    q.push(NULL)
    while q is not empty
        temp = q.front()
        if temp is NULL
            output newline
            q.pop()
            if q is not empty
                q.push(NULL)
        else
            q.pop()
            output temp->data
            if temp->left
                q.push(temp->left)
            if temp->right
                q.push(temp->right)
```