The given C++ code contains a binary tree implementation and a function to check if the tree is a height-balanced binary tree. The function `isHeightBalanced` uses postorder traversal to calculate the height of the left and right subtrees, and then checks if the tree is height balanced or not. 

Here is the pseudo code to check if a binary tree is height balanced:

```plaintext
isHeightBalanced(root):
    if root is NULL:
        return (0, true)
    
    Left = isHeightBalanced(root->left)
    Right = isHeightBalanced(root->right)
    
    height = max(Left.first, Right.first) + 1
    
    if absolute difference of Left.first and Right.first <= 1 and Left.second is true and Right.second is true:
        return (height, true)
    else:
        return (height, false)
```

To follow-up on the pseudo code during an interview, the interviewer can ask the following questions:
1. How does the postorder traversal help in determining if the tree is height balanced?
2. Can you explain how the pair is used to store the height and balance status of the subtree?
3. What is the time complexity and space complexity of the `isHeightBalanced` function?

Time complexity: O(N) where N is the number of nodes in the binary tree as each node is visited once.
Space complexity: O(N) for the function call stack due to the recursive calls and O(N) for the queue used in the level order traversal.

By discussing these points, the interviewer can evaluate the candidate's understanding of binary tree traversal and tree properties.