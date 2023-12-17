## Problem Statement
You are given two arrays of integers `v1` and `v2`. Your task is to find the common elements between the two arrays and return them in a new array.

You need to write a function `commonElements(v1, v2)` to accomplish this task.

### Input
- Two arrays of integers `v1` and `v2`, where `1 <= |v1|, |v2| <= 10^5` and `-10^9 <= v1[i], v2[i] <= 10^9`.

### Output
- Return a new array containing the common elements between the two input arrays, sorted in ascending order.

## Example

```plaintext
Input:
v1 = [1, 2, 3, 4, 5]
v2 = [3, 4, 5, 6, 7]

Output:
[3, 4, 5]
``` 

## Pseudo code
```plaintext
function commonElements(v1, v2):
    sort v1 in ascending order
    sort v2 in ascending order

    create an empty array v
    create an empty map map

    for each element x in v1:
        set map[x] to true

    for each element x in v2:
        if map[x] is true:
            add x to array v

    return array v
```