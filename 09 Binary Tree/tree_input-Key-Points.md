To represent the given binary tree in array form, we can use the following pseudo code:

```
tree = [1, 2, 4, -1, -1, 5, 7, -1, -1, -1, 3, -1, 6, -1, -1]
```

This pseudo code represents the binary tree with the following structure:

```
      1
     / \
    2   3
   /   /
  4   6
   \   \
    5   7
```

An interviewer can follow-up on this pseudo code by asking the following questions:

1. What does each element in the array represent?
2. How can we traverse the binary tree using this array representation?
3. Can you write functions to perform preorder, inorder, and postorder traversal using this array representation?

Time Complexity: 
- Building the tree from the array: O(n)
- Traversing the tree using the array representation for preorder, inorder, and postorder traversal: O(n)

Space Complexity:
- Creating the array to represent the binary tree: O(n)

The time complexity for building the tree and traversing it is O(n) because we need to visit all the elements in the array. The space complexity for creating the array representation of the binary tree is also O(n) because we need space to store all the elements.