To solve this problem, we can create a Suffix Trie data structure to store all the suffixes of a given input string. The Suffix Trie can be implemented using a Node class and a SuffixTrie class.

Here are the key points to follow the pseudo code:

1. Create a Node class that represents a node in the Trie. Each node will contain a character, a map to store the child nodes, and a boolean flag to indicate if the node is a terminal node.

2. Create a SuffixTrie class to build the trie and perform operations on it. The SuffixTrie class contains a root node and methods to insert a word into the trie, insert_helper to insert individual characters, and search for a word in the trie.

3. In the main function, create an instance of the SuffixTrie and insert the input string "hello" into the trie using the insert method.

4. Then, for each suffix in the array "suffixes", check if it exists in the SuffixTrie by calling the search method and print "yes" if found, otherwise print "no".

To follow up on this pseudocode, an interviewer can ask the following questions:
1. Explain how the Suffix Trie data structure is used to store the suffixes of a given input string.
2. How does the insert method work to insert the input string into the Suffix Trie?
3. What is the purpose of the insert_helper method and how is it utilized?
4. Describe the search method and how it checks for the existence of a word/suffix in the Suffix Trie.

Time Complexity:
- The time complexity to build the Suffix Trie is O(n^2), where n is the length of the input string. This is due to the nested loop in the insert method, iterating over each character of the input string and calling insert_helper for each suffix.
- The time complexity for searching a word/suffix in the Suffix Trie is O(m), where m is the length of the word/suffix to be searched.

Space Complexity:
- The space complexity for the Suffix Trie is O(n^2), where n is the length of the input string. This is due to the worst-case scenario of storing all the suffixes in the trie.