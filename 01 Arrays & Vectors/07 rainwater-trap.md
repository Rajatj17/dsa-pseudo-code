## Problem Statement
You are given a vector of integers which represents the heights of building in a line. The width of each building is 1. Compute how much water can be trapped after raining when the gaps between the buildings are filled with water.

Write a function `trappedWater` to calculate the total amount of water that can be trapped. The function should take in a vector of integers representing the heights of the buildings, and return an integer representing the total amount of water that can be trapped.

### Input
- A vector of integers `heights` representing the heights of the buildings.

### Output
- An integer representing the total amount of water that can be trapped.

## Example
Input:
```
heights = {0,1,0,2,1,0,1,3,2,1,2,1}
```

Output:
```
6
```

## Pseudo code
```pseudo
function trappedWater(heights):
    n = heights.size()
    if n <= 2 then
        return 0
    left = array of size n, initialized with 0
    right = array of size n, initialized with 0
    left[0] = heights[0]
    right[n-1] = heights[n-1]
    // calculate left max and right max
    for i from 1 to n-1:
        left[i] = maximum of left[i-1] and heights[i]
        right[n-i-1] = maximum of right[n-i] and heights[n-i-1]
        
    water = 0
    // calculate trapped water
    for i from 0 to n-1:
        water += minimum of left[i] and right[i] - heights[i]
    
    return water

// Example usage
heights = {0,1,0,2,1,0,1,3,2,1,2,1}
output = trappedWater(heights)
print output
```