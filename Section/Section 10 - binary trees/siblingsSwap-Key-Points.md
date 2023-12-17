## Problem Statement
You are given two binary trees, `X` and `Y`, with integer values at each node. You need to write a function `equal` to check whether these two trees are equal or not. Two binary trees are considered equal if they are structurally identical and the nodes have the same integer value.

## Input
- `X`: A pointer to the root of the first binary tree `X`
- `Y`: A pointer to the root of the second binary tree `Y`

## Output
- `true` if the trees are equal, `false` otherwise

## Example
### Input
```cpp
Node *rootX = new Node(1);
rootX->left = new Node(2);
rootX->right = new Node(3);
rootX->left->left = new Node(4);

Node *rootY = new Node(1);
rootY->left = new Node(2);
rootY->right = new Node(3);
rootY->left->left = new Node(4);
```

### Output
```cpp
true
```

### Input
```cpp
Node *rootX = new Node(1);
rootX->left = new Node(2);
rootX->right = new Node(3);

Node *rootY = new Node(1);
rootY->left = new Node(2);
rootY->right = new Node(3);
rootY->left->left = new Node(4);
```

### Output
```cpp
false
```

## Pseudocode
```plaintext
function equal(X, Y):
    if X == Y:
        return true
    if X and Y and X->key == Y->key:
        return (equal(X->left, Y->left) && equal(X->right, Y->right)) ||
               (equal(X->right, Y->left) && equal(X->left, Y->right))
    return false
```