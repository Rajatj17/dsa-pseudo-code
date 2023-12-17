The given pseudo code is implementing a solution using Trie data structure to find the googly strings from the given list of strings. 

Here are the key points to solve the problem using the provided pseudo code:
1. Create a Trie data structure to store the list of strings.
2. Implement a function to add words into the trie data structure.
3. Implement a recursive function to check if a given string can be formed using at least 2 words from the trie.
4. Iterate through the list of strings and check if each string is a googly string.

To follow up on this pseudo code in an interview, the interviewer can ask the following questions:
1. Can you explain the working of the Trie data structure and how it is used in the given solution?
2. How does the isSpecial function work to check if a string can be formed using at least 2 words from the trie?
3. Can you explain the time complexity and space complexity of your solution?
4. Are there any potential optimizations or edge cases that need to be considered in your solution?

Time Complexity:
- Adding words to the Trie: O(n * m), where n is the average length of the words and m is the number of words.
- Checking if a string is a googly string: O(n), where n is the length of the string.
- Overall time complexity: O(n * m) + O(n), where n is the average length of the strings and m is the number of strings in the list.

Space Complexity:
- Trie data structure: O(n * m), where n is the average length of the words and m is the number of words.
- Overall space complexity: O(n * m), where n is the average length of the words and m is the number of words.

By discussing these points, the interviewer can gain insight into the candidate's understanding of data structures, algorithms, and problem-solving skills.