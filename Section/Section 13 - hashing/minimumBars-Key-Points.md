## Problem Statement

You are given a string `s` and a vector of strings `words`, your task is to find the minimum number of bars required to form the string `s` by concatenating the words present in the vector `words`. If it is not possible to form the string `s` using the words from the vector `words`, then return -1.


## Input

- String `s` denoting the string which needs to be formed using the words present in the vector `words`.
- Vector of strings `words` containing a list of words that can be used to form the string `s`.
- Integer `n` representing the number of elements in the vector `words`.


## Output

- Return the minimum number of bars required to form the string `s` using the given words.
- If it is not possible to form the string `s` using the words from the vector `words`, then return -1.


## Example 

Input:
```cpp
s = "applepie"
words = ["apple", "pie", "app", "le", "pi", "e"]
n = 6
```

Output:
```
2
```

Input:
```cpp
s = "stackoverflow"
words = ["stack", "over", "flow", "stackover", "flow"]
n = 5
```

Output:
```
-1
```

The following pseudo code demonstrates the template of the C++ solution pre-implemented using bit manipulation:

```plaintext
FUNCTION min_bars_helper(s, words, idx, m) 
    IF s[idx] == '\0' THEN 
        RETURN 0
    END IF
    
    ans = INT_MAX
    current_string = ""

    FOR j = idx TO s.size() - 1 DO
        current_string += s[j]

        IF m.find(current_string) != m.end() THEN
            remaning_ans = min_bars_helper(s, words, j + 1, m)
            IF remaning_ans != -1 THEN
                ans = MIN(ans, 1 + remaning_ans)
            END IF
        END IF
    END FOR

    IF ans == INT_MAX THEN
        RETURN -1
    END IF
    
    RETURN ans
END FUNCTION


FUNCTION min_bars(s, words, n) 
    m = unordered_set<string>()

    FOR EACH w IN words DO
        m.insert(w)
    END FOR

    RETURN min_bars_helper(s, words, 0, m) - 1
END FUNCTION
```