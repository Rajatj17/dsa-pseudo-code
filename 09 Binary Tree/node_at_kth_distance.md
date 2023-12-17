### Problem Statement
You are given a binary tree and a target node `target`. Your task is to print all the nodes which are at distance `k` from the target node. 

Write a function `printNodesAtDistanceK` to solve the problem. 

### Input
- The function `printNodesAtDistanceK` takes the following arguments:
   - `root` : Pointer to the root of the binary tree.
   - `target` : Pointer to the target node in the binary tree.
   - `k` : An integer value denoting the distance.

### Output
- Print all the nodes which are at distance `k` from the target node.

### Example
``` 
Input:
                        1
                      /   \
                    2      3
                  /  \       \
                4    5       6
                      /  \
                     7    8
                          /  \
                         9    10
                        
target = 5
k = 2

Output:
7 8 3
```

### Pseudo Code
```
function printNodesAtDistanceK(root, target, k):
    if root is NULL:
        return -1
    
    if root is equal to target:
        printAtLevelK(target, k)
        return 0

    DL = printNodesAtDistanceK(root->left, target, k)
    if DL is not equal to -1:
        if DL+1 is equal to k:
            print root->data
        else:
            printAtLevelK(root->right, k-2-DL)
        return 1+DL
    
    DR = printNodesAtDistanceK(root->right, target, k)
    if DR is not equal to -1:
        if DR+1 is equal to k:
            print root->data
        else:
            printAtLevelK(root->left, k-2-DR)
        return 1+DR
    return -1

function printAtLevelK(root, k):
    if root is NULL:
        return
    if k is equal to 0:
        print root->data
        return
    printAtLevelK(root->left, k-1)
    printAtLevelK(root->right, k-1)
    return
```

Pseudo code for the given c++ code is provided above.