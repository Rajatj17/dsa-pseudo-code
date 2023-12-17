## Problem Statement
You are given a paragraph and a word. You need to find the positions of the first and second occurrence of the given word in the paragraph.

## Input
- A paragraph in the form of a string (`paragraph`)
- A word in the form of a string (`word`)

## Output
- The position of the first occurrence of the word in the paragraph
- The position of the second occurrence of the word in the paragraph

## Example
Input:
```
paragraph = "We are learning about STL strings. STL string class is quite powerful"
word = "STL"
```

Output:
```
first occ 20
second occ 42
```

## Pseudo code
```
paragraph = "We are learning about STL strings. STL string class is quite powerful"
word = "STL"

index = find_index(paragraph, word)  // find function to get position of first occurrence
if index != -1:
    print "first occ ", index

index = find_index(paragraph, word, index+1)  // find function to get position of second occurrence
if index != -1:
    print "second occ ", index
```