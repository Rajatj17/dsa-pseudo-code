Key points to solve the problem:
- Use a stack to keep track of the operators and opening parentheses.
- Iterate through the string, and for each character, push it to the stack if it's not a closing parenthesis.
- When encountering a closing parenthesis, pop elements from the stack until an opening parenthesis is found. While popping, check for the presence of an operator.
- If no operator is found, then the parenthesis is redundant.
- Return true if redundant parenthesis is found, false otherwise.

To follow-up on this pseudo code during an interview, the interviewer can ask the following questions:
1. Can you explain in more detail how the stack is being used in this code?
2. How would you handle different types of operators, such as "*", "/", etc.?
3. Is there a more efficient way to solve this problem, in terms of both time and space complexity?

Time Complexity: O(n), where n is the length of the input string.
Space Complexity: O(n), the space used by the stack in the worst case scenario.