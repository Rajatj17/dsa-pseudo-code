The given pseudocode defines a class `node` and a function `lca` to find the lowest common ancestor (LCA) of two nodes with values 'a' and 'b' in a binary tree.

Key points to solve the problem:
1. The provided pseudocode defines a class `node` with data members for the value of the node, and pointers to its left and right children.
2. The function `lca` takes in the root of the binary tree along with two values 'a' and 'b', and it returns the LCA of nodes with values 'a' and 'b'.
3. If the root is NULL, the function returns NULL.
4. If the value of the root is either 'a' or 'b', the root itself is the LCA, and it is returned.
5. Otherwise, the function recursively searches for the LCA in the left and right subtrees. It stores the results in `leftans` and `rightans`.
6. If both `leftans` and `rightans` are not NULL, the root is the LCA and is returned.
7. If only `leftans` is not NULL, it is returned as the LCA.
8. If only `rightans` is not NULL, it is returned as the LCA.

To follow up with this pseudocode in an interview, the interviewer can ask the candidate to explain the logic behind the LCA algorithm, discuss any potential edge cases or optimizations, and also write the complete code for the binary tree and function call to demonstrate its working.

Time Complexity:
The time complexity of the LCA algorithm is O(n) in the worst case, where n is the number of nodes in the binary tree. This is because in the worst case scenario, the algorithm may have to visit all the nodes in the tree to find the LCA.

Space Complexity:
The space complexity of the LCA algorithm is O(h), where h is the height of the binary tree. This is because the algorithm uses recursive function calls, and the maximum depth of the recursion tree is equal to the height of the binary tree.