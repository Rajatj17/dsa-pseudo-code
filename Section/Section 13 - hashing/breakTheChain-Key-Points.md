## Problem Statement
You are given a singly linked list where each node contains an integer value. The last node of the list is pointing to either NULL or any of the previously visited nodes. Your task is to break the chain at the point where the list loops. If there is no loop in the list, then no changes are needed.

You are required to complete the function `breakChain` which takes the head of the linked list as input and returns the head of the updated linked list after breaking the chain, if it has a loop.

**Input**
- The method `breakChain` takes a single parameter:
   - `head`: a pointer to the head of the linked list (node type).

**Output**
- The function should return a pointer to the head of the updated linked list if a loop is detected and the loop is broken.

### Example
#### Input
```
head = 1->2->3->4->5->2 (5 points back to 2)
```
#### Output
```
The loop is broken and the updated linked list becomes:
1->2->3->4->5->NULL
```
#### Input
```
head = 1->2->3->4 (no loop)
```
#### Output
```
The original linked list is returned as there is no loop:
1->2->3->4->NULL

```