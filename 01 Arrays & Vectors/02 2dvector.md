## Problem Statement

You are given a 2D vector `arr` containing integers. 
- Your task is to update the value of the element at the 1st row and 1st column by adding 10 to its current value.
- Then, print the updated 2D vector.

## Example

Input
```
arr =  { {1,2,3},
         {4,5,6},
         {7,8,9,10},
         {11,12} }
```

Output
```
11,2,3,
4,5,6,
7,8,9,10,
11,12,
```

## Pseudo code

```
arr[0][0] += 10 //update

for i = 0 to arr.size() - 1 do
    for number in arr[i] do
        output number + ","
    end for
    output "\n"
end for 
```