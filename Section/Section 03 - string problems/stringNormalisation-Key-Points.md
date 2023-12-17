## Problem Statement
You are given a string that may contain one or more words. Your task is to normalize the string by converting the first letter of each word to uppercase and the remaining letters to lowercase. All the word separators are a single whitespace character.

Write a function `normalize` to normalize the given string.

## Input
- A string `sentence` (1 <= sentence.length <= 10^5) that contains one or more words separated by a single whitespace character.

## Output
- Return a string containing the normalized sentence.

## Example
```plaintext
Input
sentence = "tHis is a STRING"

Output
"This Is A String"
```

## Pseudo code
```
FUNCTION skip_whitespace(sentence, idx)
    WHILE idx < length of sentence AND sentence[idx] == ' '
        idx += 1
    END WHILE
    RETURN idx
END FUNCTION

FUNCTION normalize_word(sentence, idx)
    IF idx < length of sentence AND sentence[idx] != ' '
        sentence[idx] = uppercase(sentence[idx])
        idx += 1
    END IF

    WHILE idx < length of sentence AND sentence[idx] != ' '
        sentence[idx] = lowercase(sentence[idx])
        idx += 1
    END WHILE
    RETURN idx
END FUNCTION

FUNCTION normalize(sentence)
    copy = sentence
    idx = 0

    WHILE idx < length of copy
        idx = skip_whitespace(copy, idx)
        idx = normalize_word(copy, idx)
    END WHILE

    RETURN copy
END FUNCTION
```