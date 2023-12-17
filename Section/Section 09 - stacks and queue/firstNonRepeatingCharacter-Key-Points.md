### Problem Statement
You are given a string `s`. You need to find the first non-repeating character in the string and return it as a vector.

### Input
- A string `s` consisting of lowercase English letters.

### Output
- Return a vector of characters where each character represents the first non-repeating character in the string. If no non-repeating character is found, then return '0' for that position.

### Example
Input:
```
s = "leetcode"
```
Output:
```
['l','l','l','c','c','c','c','d','d','d','0']
```

Input:
```
s = "aabbcc"
```
Output:
```
['a','a','a','0','0','0']
```

### Pseudocode
```
function FindFirstNonRepeatingCharacter(s: string) -> vector<char>:
    q = new Queue
    freq = new int[26] filled with 0
    res = new vector<char>
    for i in 0 to s.length()-1:
        q.push(s[i])
        freq[s[i]-'a']++
        while not q.empty():
            if freq[q.front()-'a'] > 1:
                q.pop()
            else:
                res.push_back(q.front())
                break
        if q.empty():
            res.push_back('0')
    return res
```