## Problem Statement

You are given a binary tree and two nodes `a` and `b`. Your task is to find the shortest distance between `a` and `b` in the tree.

You need to implement a function `shortestDist` that takes the root of the binary tree and two integers `a` and `b` and returns the shortest distance between node `a` and `b` in the given binary tree.

```cpp
class node
{
  public:
   int key;
   node *left;
   node *right;

   node(int key){
       this->key = key;
       left = right  = NULL;
   }
};

node* lca(node*root, int a, int b);
int search(node*root, int key, int level);
int shortestDist(node * root,int a,int b);
```

**Input**
- The function `shortestDist` takes the root of the binary tree and two integers `a` and `b` as parameters.

**Output**
- Return the shortest distance between node `a` and `b` in the given binary tree.

## Example
```cpp
node *root = new node(1);
root->left = new node(2);
root->right = new node(3);
root->left->left = new node(4);
root->left->right = new node(5);
root->right->left = new node(6);
root->right->right = new node(7);

//         1
//        / \
//       2   3
//      / \ /\
//     4  5 6 7
  
shortestDist(root, 4, 5) => 2
shortestDist(root, 2, 5) => 1
```

## Pseudo code

```plaintext
node lca(root, a, b):
    if root is NULL:
        return NULL
    
    if root.key is equal to a or root.key is equal to b:
        return root
    
    leftans = lca(root.left, a, b)
    rightans = lca(root.right, a, b)
    
    if leftans is not NULL and rightans is not NULL:
        return root
    
    if leftans is not NULL:
        return leftans
    
    return rightans

int search(root, key, level):
    if root is NULL:
        return -1
    
    if root.key is equal to key:
        return level
    
    left = search(root.left, key, level + 1)
    if left is not -1:
        return left
    
    return search(root.right, key, level + 1)
    
int shortestDist(root, a, b):
    lca_node = lca(root, a, b)
    
    l1 = search(lca_node, a, 0)
    l2 = search(lca_node, b, 0)
    
    return l1 + l2
```