The pseudo code provided is an implementation of the binary search algorithm for finding an element in a rotated sorted array. Here are the key points to solve the problem:

1. The input consists of a vector of integers representing the rotated sorted array and an integer key to be searched.

2. The function `rotated_search` takes the vector and the key as input and returns the index of the key if found, and -1 otherwise.

3. It first calculates the size of the array and initializes the start `s` to 0 and end `e` to `n-1`.

4. Then it enters a while loop where the binary search logic is implemented:

   a. It calculates the middle index `mid` of the array.
   
   b. If the element at `mid` equals the key, the index `mid` is returned.

   c. The algorithm checks if the left half (`s` to `mid`) is sorted or the right half (`mid` to `e`). It decides which half to search based on the comparison of the key with the values at `s`, `e`, and `mid`.

   d. It updates the `s` and `e` indices accordingly and continues the search.

5. If the key is not found in the array, the function returns -1.

To follow up on this pseudo code, an interviewer can ask the following questions:

1. Can you explain the logic behind choosing the left or right half in each step of the search?
2. What is the time complexity of the `rotated_search` function?
3. What is the space complexity of the `rotated_search` function?

Time Complexity:
The time complexity of this algorithm is O(log n) where n is the number of elements in the input array. This is because at each step of the binary search, the search space is divided in half.

Space Complexity:
The space complexity of this algorithm is O(1) as it only uses a constant amount of extra space for variables, regardless of the input size.