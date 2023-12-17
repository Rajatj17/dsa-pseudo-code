```plaintext
# Problem Statement

You are given a list of strings and a specific key and you need to sort the list of strings based on the specific key and provided ordering. Implement the function `sortStrings` such that it takes the following parameters:

* `n`: an integer representing the number of strings in the list.
* `strings`: a vector of strings containing the list of strings.
* `key`: an integer representing the specific key for sorting.
* `reversal`: a string representing whether to reverse the sorted list or not, can be "true" or "false".
* `ordering`: a string representing the ordering for sorting, can be "numeric" or "lexicographic".

The function should then return the sorted list of strings based on the specific key and provided ordering.

**Input**
- An integer `n` representing the number of strings in the list, where (1 ≤ n ≤ 10^3)
- A vector `strings` containing `n` strings, where each string contains space-separated words, where (1 ≤ length of string ≤ 100)
- An integer `key` representing the specific key for sorting, where (1 ≤ key ≤ number of words in each string)
- A string `reversal` representing whether to reverse the sorted list or not, can be "true" or "false".
- A string `ordering` representing the ordering for sorting, can be "numeric" or "lexicographic".

**Output**
- The function should return the sorted list of strings based on the specific key and provided ordering.

# Example

Input
```plaintext
3
92 022
82 12
77 13
2 false numeric
```

Output
```plaintext
82 12
77 13
92 022
```


```cpp
// Pseudo code for the given C++ code

function extractStringAtKey(string str, int key) {
    // implementation for extracting string at the provided key
}

function convertToInt(string s) {
    // implementation for converting string to integer
}

function lexicoCompare(pair<string, string> s1, pair<string, string> s2) {
    // implementation for lexicographic comparison
}

function numericCompare(pair<string, string> s1, pair<string, string> s2) {
    // implementation for numeric comparison
}

function sortStrings(int n, vector<string> strings, int key, string reversal, string ordering) {
    // implementation for sorting and returning the sorted list of strings
}
```