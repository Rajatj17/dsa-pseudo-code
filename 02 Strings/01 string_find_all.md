## Problem Statement

You are given a paragraph and a word. You need to find all the occurrences of the given word in the paragraph and return the indices of the occurrences.

Write a function that takes a paragraph string and a word string as input and returns a vector containing the indices of all occurrences of the word in the paragraph.

    vector<int> stringSearch(string paragraph, string word)

## Example

Input:
    
    paragraph = "We are learning about STL strings. STL string class is quite powerful"
    word = "STL"

Output:

    [20, 33]

## Pseudo code

```plaintext
function stringSearch(paragraph, word):
    result = empty vector
    
    index = find the first occurrence of word in paragraph using string.find() function
    while index != -1:
        append index to result vector
        search for next occurrence of word in paragraph after the current index
        update index to the new occurrence
        
    return result

paragraph = "We are learning about STL strings. STL string class is quite powerful"
word = "STL"
result = stringSearch(paragraph, word)
print result
```