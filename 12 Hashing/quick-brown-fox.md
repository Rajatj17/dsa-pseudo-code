```markdown
# Problem Statement

You are given a string `s` and an array of words `words`. Your task is to find the minimum number of spaces needed to break the string into valid words. If it is not possible to form the string using the given words, then return -1.

## Input
- The string `s` (1 <= s.length() <= 10^5)
- The array of words `words` (1 <= words.length <= 100)

## Output
- The minimum number of spaces needed to form the string using the given words. If it is not possible, then return -1.

# Example

## Input
s = "thequickbrownfoxjumpsoverthehighbridge"
words = {"the","fox","thequickbrownfox", "jumps","lazy","lazyfox", "highbridge","the","over", "bridge","high","tall","quick","brown"}

## Output
4

## Input
s = "thequickbrownfox"
words = {"the", "quickbrown", "fox","quick","brown"}

## Output
2
```

# Pseudo code

```plaintext
function min_bars_helper(s, words, idx, m):
    if s[idx] is null:
        return 0
    ans = INT_MAX
    current_string = ""
    for j = idx to end of s:
        current_string += s[j]
        if current_string is present in set m:
            remaning_ans = min_bars_helper(s, words, j+1, m)
            if remaning_ans is not -1:
                ans = min(ans, 1 + remaning_ans)
    if ans is equal to INT_MAX:
        return -1
    return ans

function min_bars():
    create an unordered_set m
    for every string w in words:
        insert w into set m
    output = min_bars_helper(s, words, 0, m)
    return output - 1

function main():
    print min_bars()
```
