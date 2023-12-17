## Problem Statement
You are given a binary tree where each node contains an integer value. Your task is to find the maximum sum of a subset of the given binary tree, where subset does not contain adjacent nodes.

You need to implement a function `maxSubsetSum` to find the maximum sum and use this function in the `main` function.

## Input
- The input consists of a binary tree. The binary tree is input in level order as a sequence of integers where `-1` denotes the NULL node.

## Output
- The function should return the `maxSubsetSum` consisting of the maximum sum of a subset of the given binary tree.

## Example
Consider the following binary tree:
```
         1
       /   \
      2     3
     / \     \
    4   5     6
        \
         7
```
### Input
1 2 3 4 5 -1 6 -1 -1 -1 -1 -1 7 -1 -1

### Output
Max Sum : 13
Explanation: The maximum sum subset can be {2, 4, 7}

## Pseudo code
``` 
class node{
    int data
    node*left
    node*right
}

//Function to build binary tree
node* buildTree(){
    int d
    cin>>d
    if(d==-1){
        return NULL
    }
    node* n = new node(d)
    n->left = buildTree()
    n->right = buildTree()
    return n
}

//Function to traverse the binary tree in level order
void levelOrderPrint(node*root){
    queue<node*> q
    q.push(root)
    q.push(NULL)
    while(!q.empty()){
        node* temp = q.front()
        if(temp==NULL){
            cout<<endl
            q.pop()
            if(!q.empty()){
                q.push(NULL)
            }
        }
        else{
            q.pop()
            cout<<temp->data<<" "
            if(temp->left){
                q.push(temp->left)
            }
            if(temp->right){
                q.push(temp->right)
            }
        }
    }
}

class Pair{
    int inc
    int exc
}

//Function to find maximum subset sum
Pair maxSubsetSum(node* root){
    Pair p
    if(root==NULL){
        p.inc = p.exc = 0
        return p
    }
    Pair Left = maxSubsetSum(root->left)
    Pair Right = maxSubsetSum(root->right)
    p.inc = root->data + Left.exc + Right.exc
    p.exc = max(Left.inc,Left.exc) + max(Right.inc,Right.exc)
    return p
}

int main(){
    node* root = buildTree()
    levelOrderPrint(root)
    Pair p = maxSubsetSum(root)
    cout <<"Max Sum : "<< max(p.inc, p.exc) <<endl
}
```