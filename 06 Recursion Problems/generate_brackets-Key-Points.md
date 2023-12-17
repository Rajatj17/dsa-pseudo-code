The given pseudo code is a C++ program to generate all well-formed combinations of n pairs of parentheses. 

Here are the key points to solve the problem:
- The main function takes an integer input 'n', representing the number of pairs of parentheses to be generated.
- The generateBrackets function is a recursive function that takes five parameters:
  - 'output': current output string, initially empty
  - 'n': the total number of pairs of parentheses
  - 'open': number of opening brackets added so far
  - 'close': number of closing brackets added so far
  - 'i': current index in the output string
- The base case is when the index 'i' reaches '2*n', at which point the output string is printed and the function returns.
- The recursive calls are made to add an opening bracket if the count of open brackets is less than 'n', and to add a closing bracket if the count of closing brackets is less than the count of open brackets.

The following can be asked in an interview to follow-up on this pseudo code:
1. How would you modify the code to return all valid combinations of n pairs of parentheses as a list of strings instead of printing them directly?
2. What is the time complexity of the given code?
3. What is the space complexity of the given code?

Time Complexity: O(2^n) - The total number of well-formed combinations of parentheses is 2^n, where n is the given integer.
Space Complexity: O(n) - The recursion stack can go as deep as the input 'n', so the space complexity is O(n).