```markdown
## Problem Statement

Given a binary tree, you are required to implement Level Order Traversal and find the diameter of the tree.

### Input
The input consists of integers representing the nodes of the binary tree in a pre-order fashion. The value -1 denotes a NULL node.

### Output
1. The level order traversal of the tree in the specified format.
2. The diameter of the tree.

## Example

### Input
```
1 2 4 -1 -1 5 7 -1 -1 -1 3 -1 6 -1 -1
```

### Output
```
1
2 3
4 5 6
7
Diameter is 4
Opt Diameter is 4
```

## Pseudo code
```pseudo
node* buildTree():
    d = input()
    if d is -1:
        return NULL
    n = new node(d)
    n->left = buildTree()
    n->right = buildTree()
    return n

void levelOrderPrint(root):
    queue q
    q.push(root)
    q.push(NULL)
    while q is not empty:
        temp = q.front()
        if temp is NULL:
            print new line
            pop element from q
            if q is not empty:
                q.push(NULL)
        else:
            pop element from q
            print temp->data
            if temp->left is not NULL:
                q.push(temp->left)
            if temp->right is not NULL:
                q.push(temp->right)

int height(root):
    if root is NULL:
        return 0
    h1 = height(root->left)
    h2 = height(root->right)
    return 1 + max(h1, h2)

int diameter(root):
    if root is NULL:
        return 0
    D1 = height(root->left) + height(root->right)
    D2 = diameter(root->left)
    D3 = diameter(root->right)
    return max(D1, max(D2, D3))

class HDPair:
    int height
    int diameter

HDPair optDiameter(root):
    if root is NULL:
        p.height = p.diameter = 0
        return p
    Left = optDiameter(root->left)
    Right = optDiameter(root.right)
    p.height = max(Left.height, Right.height) + 1
    D1 = Left.height + Right.height
    D2 = Left.diameter
    D3 = Right.diameter
    p.diameter = max(D1, max(D2, D3))
    return p

int main():
    root = buildTree()
    levelOrderPrint(root)
    print "Diameter is", diameter(root)
    print "Opt Diameter is", optDiameter(root).diameter
```
```