## Problem Statement

You are given a binary tree. Your task is to replace each node's value with the sum of its descendants' values, leaving the leaf nodes' values intact. Write a function to perform this replacement and print the level order traversal of the modified tree.

## Inputs

The input is provided using level order traversal method. The input may contain `-1` indicating the absence of a child for a particular parent node.

## Output

Print the level order traversal of the modified binary tree after replacing each node's value with the sum of its descendants' values.

## Example

Input:
```
1 2 3 4 5 6 7 -1 -1 -1 -1 -1 -1 -1 -1
```

Output:
```
28 
6 15 
4 11 6
7
```

## Pseudo Code

```plaintext
class Node {
    int data;
    Node* left;
    Node* right;
    
    // Constructor to initialize the node with data
    Node(data) {
        this.data = data;
        this.left = NULL;
        this.right = NULL;
    }
}

// Function to build a binary tree using level order traversal input
node* levelOrderBuild() {
    Read the root node's data from input
    Create a new root node with the given data
    
    Create a queue q
    Push the root into the queue
    
    while q is not empty 
       current = front element of the queue
       Pop the front element of the queue
       
       Read left child data and right child data from input
       If left child data is not -1
           Create a new node with left child data
           Set the left child of current node to the newly created node
           Push the left child node into the queue
       
       If right child data is not -1
           Create a new node with right child data
           Set the right child of current node to the newly created node
           Push the right child node into the queue
       
    Return the root of the binary tree
}

// Function to replace each node's value with the sum of its descendants' values
int replaceWithSum(node* root) {
    base case
    if root is NULL
        return 0
    if root has no children (leaf node)
        return root's data
    
    recursive case
    LS = replaceWithSum(root->left)
    RS = replaceWithSum(root->right)
    
    temp = root's data
    set root's data to LS + RS
    return root's data + temp
}

// Function to perform Level Order Traversal of the tree
void levelOrderPrint(node* root) {
    Create a queue q
    Push the root into the queue
    Push NULL into the queue
    
    while q is not empty 
        temp = front element of the queue
        If temp is NULL
            Print a new line
            Pop the front element of the queue
            If q is not empty
                Push NULL into the queue
        Else
            Pop the front element of the queue
            Print temp's data followed by a space
            If temp has a left child
                Push temp's left child into the queue
            If temp has a right child
                Push temp's right child into the queue
```
After the above pseudo code is implemented, the modified tree is printed using the `levelOrderPrint()` function.