## Problem Statement
You are given a list of strings, where each string is an anagram of another string in the list. Write a function to group the anagrams together.

Write a function `groupAnagrams` to take in a vector of strings as input and return a 2D vector of grouped anagrams. 

## Example
```cpp
Input:
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

Output:
[
  ["eat","tea","ate"],
  ["tan","nat"],
  ["bat"]
]
```

## Pseudo code
```plaintext
function groupAnagrams(strs):
    res = empty 2D vector
    map = empty unordered_map
    
    for i = 0 to length of strs:
        key = strs[i]
        sort key
        if key exists in map:
            location = map[key]
            Add strs[i] to res[location]
        else:
            Add strs[i] as new entry to res
            location = size of res - 1
            map[key] = location
    
    return res
```