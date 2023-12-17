## Problem Statement

You are given a Binary Search Tree (BST) and you have to convert it into a sorted doubly linked list. You need to implement the `tree2LL` function that takes the root of the BST as input and returns a linked list (object of `LinkedList` class) containing the pointers to the head and tail of the sorted doubly linked list.

## Input
The input to the function `tree2LL` is the root node of the BST.

## Output
The function should return a linked list (object of `LinkedList` class) containing the pointers to the head and tail of the sorted doubly linked list.

## Example

Input:
```
        8
       / \
      3   10
     / \    \
    1   6   14
       / \  /
      4  7 13
```

Output:
```
1--> 3--> 4--> 6--> 7--> 8--> 10--> 13--> 14-->
```

## Pseudocode
```plaintext
Node {
    int key;
    Node* left;
    Node* right;
    
    Node(int key) {
        this->key = key;
        left = right = NULL;
    }
}

Node* insert(Node* root, int key) {
    if(root == NULL) {
        return new Node(key);
    }

    if(key < root->key) {
        root->left = insert(root->left, key);
    } else {
        root->right = insert(root->right, key);
    }
    return root;
}

void printInOrder(Node* root) {
    if(root == NULL) {
        return;
    }
    printInOrder(root->left);
    cout << root->key << " ,";
    printInOrder(root->right);
}

class LinkedList {
    Node* head;
    Node* tail;
};

LinkedList tree2LL(Node* root) {
    LinkedList l;
    
    if(root == NULL) {
        l.head = l.tail = NULL;
        return l;
    }
    
    if(root->left == NULL and root->right == NULL) {
        l.head = l.tail = root;
    } else if(root->left != NULL and root->right == NULL) {
        LinkedList leftLL = tree2LL(root->left);
        leftLL.tail->right = root;

        l.head = leftLL.head;
        l.tail = root;
    } else if(root->left == NULL and root->right != NULL) {
        LinkedList rightLL = tree2LL(root->right);
        root->right = rightLL.head;

        l.head = root;
        l.tail = rightLL.tail;
    } else {
        LinkedList leftLL = tree2LL(root->left);
        LinkedList rightLL = tree2LL(root->right);
        leftLL.tail->right = root;
        root->right = rightLL.head;

        l.head = leftLL.head;
        l.tail = rightLL.tail;
    }

    return l;
}

Node* root = NULL;
int arr[] = {8,3,10,1,6,14,4,7,13};

for(int x : arr) {
    root = insert(root, x);
}
LinkedList l = tree2LL(root);

Node* temp = l.head;
while(temp != NULL) {
    cout << temp->key << "--> ";
    temp = temp->right;
}
```