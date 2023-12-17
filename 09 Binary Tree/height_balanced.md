## Problem Statement
You are given the root of a binary tree. You need to find whether the given binary tree is height balanced or not. A height balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differs by more than 1.

For example, the following binary tree is height balanced:

```
     1
    / \
   2   3
  / \   \
 4   5   6
```

But the following binary tree is not height balanced:

```
     1
    / \
   2   3
  / \   \
 4   5   6
        /
       7
      /
     8
```

## Input
- Input consists of nodes of a binary tree in a pre-order sequence, where -1 indicates a null child.

## Output
- Return "Yes, its height balanced" if the binary tree is height balanced, else return "Not a height balanced tree".

## Example

#### Input
    1 2 4 -1 -1 5 7 -1 -1 -1 3 -1 6 -1 -1

#### Output
    Yes, its height balanced

#### Input
    1 2 4 -1 -1 5 7 8 -1 -1 -1 -1 3 -1 6 -1 -1

#### Output
    Not a height balanced tree