## Problem Statement

You are given a linked list where each node contains an integer value. Write a function `containsCycle` to determine whether the linked list contains a cycle.

A linked list contains a cycle if the same node is visited more than once while traversing the list.

Your task is to implement the `containsCycle` function to return `true` if the linked list contains a cycle and `false` otherwise.

The function should take in the head of the linked list as input and return a boolean value.

### Input
- The input to the function `containsCycle` will be the head of the linked list.

### Output
- The function should return `true` if the linked list contains a cycle and `false` otherwise.

## Example
``` 
Input:
1 -> 2 -> 3 -> 4 -> 5
     ^              |
     |              |
     ---------------
     
Output:
true

Input:
1 -> 2 -> 3 -> 4 -> 5 -> NULL

Output:
false
```


## Pseudo code
```pseudocode
bool containsCycle(node *head){
    //Complete this function 
    
    node*slow = head;
    node*fast = head;
    
    while(slow and fast and fast->next){
        slow = slow->next;
        fast = fast->next->next;
        if(slow==fast){
            return true;
        }
    }
    return false;
}
```