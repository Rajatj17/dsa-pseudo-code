Sure! Here's the problem statement and an example input:

### Problem Statement
You are given a binary search tree and a key. Write a function to check if the given key is present in the binary search tree.

### Example
```md
Input:
   10
  /  \
 5   15
     /  \
    12   20
   /  \    
  11  13

isPresent(root, 12)

Output:
true
```

### Pseudo code
```pseudo
class Node
{
  public:
   int key;
   Node *left;
   Node *right;

   Node(int key){
       this->key = key;
       left = right  = NULL;
   }
}

bool isPresent(Node * root,int key){
    if(root==NULL){
        return false;
    }
    if(root->key==key){
        return true;
    }
    if(root->key > key){
        return isPresent(root->left,key);
    }
    return isPresent(root->right,key);
}
```