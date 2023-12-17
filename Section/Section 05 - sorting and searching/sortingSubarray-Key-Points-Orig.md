The given problem is to find the range of indices that need to be sorted to make the entire array sorted.

### Pseudo Code
```plaintext
1. Copy the input array 'a' to a new array 'b'.
2. Sort the array 'a' using any efficient sorting algorithm with O(NlogN) time complexity.
3. Initialize two pointers i and j to 0 and n-1 respectively, where n is the size of array a.
4. Iterate through the array from the start and end to find the first and last mismatched index compared to the sorted array.
5. If the entire array is already sorted, return {-1, -1}.
6. Otherwise, return the pair of indices {i, j} indicating the range that needs to be sorted.
```

### Follow-up
To follow up on this pseudocode, an interviewer can ask the following questions:
1. Can you propose an alternative solution with O(N) time complexity?
2. How would you modify the code if the array contains duplicate elements?

### Time Complexity
The time complexity of the given solution is O(NlogN) due to the sorting operation.

### Space Complexity
The space complexity of the given solution is O(N) as an additional array 'b' of the same size as the input array 'a' is created.