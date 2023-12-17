## Problem Statement

You are given a sequence of integers representing a binary tree. The tree is represented in a list where a -1 indicates a missing node. Your task is to write a function to serialize and deserialize the tree.

## Example

Input
```plaintext
1 2 4 -1 -1 5 7 -1 -1 -1 3 -1 6 -1 -1
```

Output
```plaintext
[1, 2, 3, 4, 5, 6, 7]
```

## Pseudo code

### Deserialize function
```
deserialize(input):
    # Split the input into a list of integers
    nodes = input.split(" ")

    # Create a queue to store the nodes
    queue = Queue()

    # Initialize the root node
    root = new TreeNode(nodes[0])
    queue.push(root)

    # Iterate through the rest of the nodes
    i = 1
    while i < nodes.length:
        node = queue.pop()
        if nodes[i] != -1:
            # Create left child and push to queue
            leftChild = new TreeNode(nodes[i])
            node.left = leftChild
            queue.push(leftChild)
        i = i + 1
        if nodes[i] != -1:
            # Create right child and push to queue
            rightChild = new TreeNode(nodes[i])
            node.right = rightChild
            queue.push(rightChild)
        i = i + 1

    return root
```

### Serialize function
```
serialize(root):
    if root is null:
        return ""

    # Create a list to store the nodes
    nodes = []

    # Create a queue to perform level order traversal
    queue = Queue()
    queue.push(root)

    # Perform level order traversal
    while !queue.isEmpty():
        node = queue.pop()
        if node is null:
            nodes.push(-1)
        else:
            nodes.push(node.val)
            queue.push(node.left)
            queue.push(node.right)

    # Convert the list of nodes to a string and return
    return nodes.join(" ")
```