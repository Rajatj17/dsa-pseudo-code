### Problem Statement

You are given a list of numbers representing a binary tree in a level order traversal. The list starts with the root and then lists the children of the root, and then the children of the children, and so on. With the given list, you are required to reconstruct the binary tree and return the root.

### Input

- A list of numbers representing a binary tree in a level order traversal.

### Output

- Return the root of the reconstructed binary tree.

### Example

Input:
```
1 2 3 4 5 -1 6 -1-1 7 -1 -1 -1 -1 -1
```

Output:

*Reconstructed Binary Tree:*
```
     1
    / \
   2   3
  / \   \
 4   5   6
        /
       7
```

### Pseudocode

```
class TreeNode {
    value
    left
    right
}

function reconstructBinaryTree(list) {
    if list is empty
        return null

    root = new TreeNode(list[0])
    queue = new Queue()
    queue.push(root)

    i = 1
    while i < list.length 
        current = queue.pop()
        leftValue = list[i]
        if leftValue != -1
            current.left = new TreeNode(leftValue)
            queue.push(current.left)

        i = i + 1
        rightValue = list[i]
        if rightValue != -1
            current.right = new TreeNode(rightValue)
            queue.push(current.right)

        i = i + 1

    return root
}
```
