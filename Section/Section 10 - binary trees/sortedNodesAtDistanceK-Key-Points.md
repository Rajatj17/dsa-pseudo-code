## Problem Statement

You are given a binary tree represented by a node `root`, a target node `target`, and an integer `k`. Your task is to find and return all nodes that are exactly `k` distance away from the `target` node in the binary tree.

You need to implement the function `nodesAtDistanceK`:

```cpp
vector<int> nodesAtDistanceK(node *root, node *target, int k);
```

**Input**
- `node *root` : Represents the root of the binary tree.
- `node *target` : Represents the target node from which the distance calculation needs to be done.
- `int k` : Represents the distance at which we need to find the nodes from the target node.

**Output**
- Returns a sorted vector of integers with all the nodes that are exactly `k` distance away from the `target` node in the binary tree.

## Example

Input:
root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2

              3
             / \
            5   1
           / \ / \
          6  2 0  8
            / \
           7   4

Output:
[7,4]

Note:
The nodes that are exactly 2 distance away from the target node 5 are 7 and 4.
