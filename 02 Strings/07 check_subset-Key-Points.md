To check if string s2 is a subset of string s1, we can use a simple algorithm to iterate through both strings in reverse order and compare their characters. If we find a match, we move on to the previous characters in both strings, otherwise we move to the previous character in string s1.

Pseudo code for the algorithm:
```
isSubset(s1, s2):
    i = length of s1 - 1
    j = length of s2 - 1
    
    while i>=0 and j>=0:
        if s2[j] == s1[i]:
            i--
            j--
        else:
            i--
    
    if j == -1:
        return true
    else:
        return false
```
The isSubset() function takes two strings s1 and s2 as input and returns a boolean indicating whether s2 is a subset of s1.

To follow-up on this pseudo code in an interview, the interviewer can ask the candidate to:
1. Explain the logic and the reasoning behind using a reverse iteration for comparing the strings.
2. Discuss alternative solutions and their time and space complexity.
3. Analyze the time and space complexity of the provided pseudo code.

Time Complexity: 
The time complexity of the given algorithm is O(n), where n is the length of the longer string between s1 and s2. This is because in the worst case, we iterate through both strings completely once.

Space Complexity: 
The space complexity of the algorithm is O(1), as we only use a constant amount of extra space for the integer variables i and j, and no additional space that grows with the input size.