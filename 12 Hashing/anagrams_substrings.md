```plaintext
Problem Statement:
Given a string, find the number of unordered anagramic pairs of substrings.

Example:
Input:
s = "abba"

Output:
4

Explanation:
The unordered anagramic pairs are (a,a), (ab,ba), (b,b), (abb, bba)

Pseudo code:
1. Define a function to calculate the hash value of a substring and return a vector containing the frequency of each character.
2. Iterate through all possible substrings of the input string and calculate their hash values using the defined function.
3. Store the hash values in a map and increment their frequency count.
4. Iterate through the map and calculate the number of pairs for each frequency count of hash values.
5. Return the total number of pairs found.

```