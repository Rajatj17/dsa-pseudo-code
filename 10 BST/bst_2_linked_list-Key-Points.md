To convert a Binary Search Tree (BST) to a sorted doubly linked list, the following steps are taken:

1. Define a class `Node` with attributes `key`, `left`, and `right` to represent a node in the BST. Implement a constructor to initialize the node.
2. Implement the `insert` function to insert nodes into the BST based on their keys.
3. Implement the `printInOrder` function to perform an in-order traversal of the BST and print the keys in sorted order.
4. Define a class `LinkedList` with attributes `head` and `tail` to represent the linked list.
5. Implement the `tree2LL` function to convert the BST to a sorted linked list using recursion and handle four cases:
   a. If the root is NULL, set the head and tail of the linked list to NULL and return.
   b. If the root has no left child, but has a right child, convert the right subtree to a linked list, update the pointers, and set the head and tail of the linked list accordingly.
   c. If the root has no right child, but has a left child, convert the left subtree to a linked list, update the pointers, and set the head and tail of the linked list accordingly.
   d. If the root has both left and right children, convert both subtrees to linked lists, update the pointers, and set the head and tail of the linked list accordingly.

6. In the `main` function, create a sample BST using the `insert` function, call the `tree2LL` function to convert the BST to a linked list, and print the keys of the linked list.

The interviewer can follow up on this pseudo code by asking the following questions:
- Can you explain the time complexity and space complexity of the `tree2LL` function?
- Can you explain how the BST to linked list conversion works for each case?
- Can you modify the code to handle a balanced binary tree instead of a skewed one?
- Can you optimize the code for any specific scenario or edge cases?

**Time Complexity:**
The time complexity of converting a BST to a linked list using the `tree2LL` function is O(n), where n is the number of nodes in the BST. This is because each node is visited once during the conversion process.

**Space Complexity:**
The space complexity of the `tree2LL` function is O(h), where h is the height of the BST. This is due to the recursive calls on the tree, which leads to a recursive stack depth of h.