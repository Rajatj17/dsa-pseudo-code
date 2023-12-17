To implement a binary search tree (BST) in C++, you can use the following key points:
1. Define a Node class with integer key, and left and right pointers to other Nodes.
2. Implement an insert function that adds a new Node to the BST according to its value:
   - If the given root is NULL, create a new Node with the given key and return it.
   - If the key is less than the root's key, recursively insert the key in the left subtree.
   - Otherwise, recursively insert the key in the right subtree.
   - Return the root after insertion.
3. Define a search function to check if a given key exists in the BST. (Implement as a homework task)
4. Implement a printInOrder function to output the keys of the BST in sorted order:
   - If the root is not NULL, recursively call printInOrder for the left subtree, then output the root's key, and finally recursively call printInOrder for the right subtree.

In a follow-up interview, you can discuss the following points:
1. Implementing the search function to check if a given key exists in the BST, and its time complexity.
2. Handling deletion and other operations in a BST.
3. Discussing different traversal methods like pre-order, post-order, and level-order traversal in a BST.
4. Optimizing the insert function for balancing the BST to maintain an approximately balanced structure.

Time Complexity:
- Insertion: O(h) on average (h is the height of the BST), O(n) in the worst case for a skewed tree.
- Searching: O(h) on average, O(n) in the worst case.

Space Complexity:
- The space complexity of the BST is O(n) for storing n keys in the tree.