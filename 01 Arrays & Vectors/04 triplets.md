```plaintext
Problem Statement:
You are given an array of integers and a target sum. You need to find all unique triplets in the array which gives the sum equal to the target sum.

Example:
Input:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15]
targetSum = 18

Output:
1, 6, 11,
2, 5, 11,
2, 6, 10,
3, 4, 11,
3, 5, 10,
4, 5, 9,

Pseudo code:

function triplets(arr, targetSum) 
    n = arr.size
    sort(arr)
    result = empty 2D vector

    for i = 0 to n-3 
        j = i + 1 
        k = n - 1 
        while j < k 
            current_sum = arr[i] + arr[j] + arr[k]
            if(current_sum == targetSum) 
                result.push_back({arr[i], arr[j], arr[k]})
                j++
                k--
            else if(current_sum > targetSum) 
                k--
            else 
                 j++

    return result

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15]
targetSum = 18
result = triplets(arr, targetSum)
for each v in result
    for each no in v 
        print no + ","
    print new line
```