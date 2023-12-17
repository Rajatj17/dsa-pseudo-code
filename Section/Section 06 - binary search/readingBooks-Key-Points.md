## Problem Statement

You are given N books, and each book has a certain number of pages. Now you have to allocate these N books to m students, such that each student gets consecutively allocated books. More formally, it is guaranteed that each student will read some consecutive books. Here, a book is consecutive to the book that comes after the book B if and only if the book A is before book B.

Write a function `minPages` to find out the minimum number of pages the maximum number of students can read consecutively.

## Input
- A vector of integers `books` representing the number of pages in each book where 1 <= books[i] <= 10^5
- An integer `m` represents the number of students where 1 <= m <= N

## Output
- An integer representing the minimum number of pages that the maximum number of students can read consecutively.

## Example

```plaintext
books = [12, 34, 67, 90]
m = 2
Output: 113
```

## Pseudo Code
```plaintext
function isPossible(books, m, mid)
    n = size of books
    cs = 0
    students = 1
    for i = 0 to n-1
        if cs + books[i] > mid
            students++
            cs = books[i]
            if students > m
                return false
        else
            cs += books[i]
    return true

function minPages(books, m)
    n = size of books
    end = 0
    start = 0
    for b in books
        end += b
        start = max(start, b)
    result = INT_MAX
    while start <= end
        mid = (start + end) / 2
        if isPossible(books, m, mid)
            result = min(result, mid)
            end = mid - 1
        else
            start = mid + 1
    return result
```