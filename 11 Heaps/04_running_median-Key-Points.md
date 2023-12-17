The given pseudocode is for finding the running median using two heaps, one max-heap to store the elements less than the current median and one min-heap to store the elements greater than the current median. Here are the key points to solve the problem:

1. Initialize two heaps: a max-heap (leftheap) and a min-heap (rightheap).
2. Read the first element and push it into the max-heap. Set the median as the first element and output it.
3. Read the next element in a loop until -1 is encountered.
4. In each iteration, compare the size of the two heaps to determine which heap to insert the new element into.
5. Update the median and output it after each iteration.

A possible follow-up question an interviewer can ask is:
- Can you explain the time complexity and space complexity of the given implementation?

Time Complexity:
- The time complexity for inserting and removing elements from a heap is O(log n), where n is the number of elements in the heap.
- As there are n elements in the input, the overall time complexity of the algorithm is O(n log n).

Space Complexity:
- The space complexity of the algorithm is O(n) due to the two heaps used to store the input elements.

Interviewer can also ask the candidate to further optimize the solution and ask for another approach for solving the running median problem.