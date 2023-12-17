## Problem Statement
You are given the number of birds B and the locations of nests as an array of integers. The nests are not necessarily sorted. Our goal is to find the minimum distance between the nests such that we can place B birds with the following constraints:

- Each nest can have at most one bird.
- The distance between two nests with birds should be at least the minimum distance between nests.

Write a function `minDistanceToPlaceBirds` to calculate and return the minimum distance required to place B birds.

## Input
- An integer B representing the number of birds.
- An array of integers nests[], where `nests[i]` represents the position of the i-th nest.

## Output
- An integer representing the minimum distance required to place B birds.

## Example
Input:
```
B = 3
nests = {1, 2, 4, 8, 9}
```
Output:
```
3
```
Explanation:
After sorting the nests array, the nests become {1, 2, 4, 8, 9}. The minimum distance required to place 3 birds is 3, so that each bird can be placed at positions 1, 4, and 8. Therefore, the output is 3.

## Pseudo code
```plaintext
function canPlaceBirds(B, N, nests, sep):
    birds = 1
    location = nests[0]
    for i = 1 to N-1:
        current_location = nests[i]
        if current_location - location >= sep:
            birds++
            location = current_location
            if birds == B:
                return true
    return false

function minDistanceToPlaceBirds(B, nests):
    sort nests
    N = size of nests
    s = 0
    e = nests[N-1] - nests[0]
    ans = -1
    while s <= e:
        mid = (s + e) / 2
        canPlace = canPlaceBirds(B, N, nests, mid)
        if canPlace:
            ans = mid
            s = mid + 1
        else:
            e = mid - 1
    return ans

B = 3
nests = {1, 2, 4, 8, 9}
print minDistanceToPlaceBirds(B, nests)
```