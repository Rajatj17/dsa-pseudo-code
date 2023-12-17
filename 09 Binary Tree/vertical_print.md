### Problem Statement
You have been given a binary tree and your task is to write a function `verticalOrderPrint` to print the nodes of the Binary Tree in Vertical Order.

### Input
The input consists of nodes of a binary tree.

Example:
```
1 2 4 -1 -1 5 7 -1 -1 -1 3 -1 6 -1 -1
```

### Output
The output prints the nodes of the binary tree in a vertical order.

Example:
```
4
2
1 5 6
3
7
```

### Pseudo code
```plaintext
class node{
    int data;
    node* left;
    node* right;
    
    node(int d){
        data = d;
        left = NULL;
        right = NULL;
    }
};

node* buildTree(){
    // Input binary tree nodes and build the tree
}

void levelOrderPrint(node* root){
    // Print the nodes of binary tree in level order
}

void verticalOrderPrint(node* root){
    map<int, vector<int>> m;
    int d = 0;

    traverseTree(root, d, m);

    for each p in m:
        int key = p.first;
        vector<int> line = p.second;

        for each data in line:
            print data
        print new line
    
    return
}

void traverseTree(node* root, int d, map<int,vector<int>> &m){
    if root=NULL:
        return
    m[d].push_back(root->data);
    traverseTree(root->left, d-1, m);
    traverseTree(root->right, d+1, m);
}

node* root = Create the Binary Tree
verticalOrderPrint(root);
```
Note: Code block doesn't contain the definition for `buildTree` and `levelOrder`, the part of abstract code not completing will need to be implemented for working code.