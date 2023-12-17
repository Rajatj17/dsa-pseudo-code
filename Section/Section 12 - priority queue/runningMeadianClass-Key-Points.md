## Problem Statement

You are given a class `MedianHandler` with a method `push` that takes an integer as input and updates the median of the numbers inserted so far. You need to complete the `push` method such that it updates the median efficiently after every insertion using the given priority queues left and right.

## Input
- An integer `number` representing the number to be inserted.

## Output
- The method does not return any value, but updates the median of the numbers inserted so far.

## Constraints
- The method should complete its update of median in O(1) time.

## Example

```plaintext
Input
push(5)
push(3)
push(8)
getMedian()

Output
push(5)
push(3)
push(8)
getMedian()
output: 5
```