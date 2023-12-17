## Problem Statement

You are given a Node class with an integer key and pointers to left and right child nodes. You are required to implement the `insert` function that inserts a new node with the given key in the Binary Search Tree (BST) and the `printInOrder` function, to print the keys of the tree in an in-order traversal.

You are also required to implement the `search` function that returns true if the key is present in the BST, and false otherwise.

## Input
- A sequence of integers `arr[]` representing the keys of the nodes to be inserted into the BST.

## Output
- The keys of the nodes in the BST in an in-order traversal.

## Example

### Input
```cpp
int arr[] = {8,3,10,1,6,14,4,7,13};
```

### Output
```cpp
1 ,3 ,4 ,6 ,7 ,8 ,10 ,13 ,14 ,
```

## Pseudo code

```plaintext
class Node {
    public:
        integer key
        Node* left
        Node* right

        Node(integer key):
            this.key = key
            left = right = NULL
}

Node* insert(Node* root, integer key):
    if root is NULL:
        return new Node(key)

    if key < root->key:
        root->left = insert(root->left, key)
    else:
        root->right = insert(root->right, key)

    return root

boolean search(Node* root, integer key):
    # Homework

void printInOrder(Node* root):
    if root is NULL:
        return

    printInOrder(root->left)
    output root-> key
    printInOrder(root->right)

main():
    Node* root = NULL
    integer arr[] = {8,3,10,1,6,14,4,7,13}

    for x in arr:
        root = insert(root, x)

    printInOrder(root)
```