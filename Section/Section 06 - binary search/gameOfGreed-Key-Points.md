## Problem Statement

You are given an array `arr` of `n` positive integers representing the number of coins in each packet and an integer `k` representing the number of children. You have to divide the given packets into at least `k` equal packets such that each child gets at least `limit` number of coins. Find the minimum number `limit` such that every child can get at least `limit` number of coins. If it is not possible to divide the packets into at least `k` equal packets, then return 0.

You need to implement a C++ function `getCoins` that takes in `vector<int> arr` and an integer `k` and returns an integer representing the minimum number of coins each child should get.

```cpp
int getCoins(vector<int> arr, int k) {
  
}
```

## Example

Input
```cpp
arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
k = 3
```

Output
```cpp
getCoins(arr, k) = 50
```

Input
```cpp
arr = [4, 5, 6, 7, 8, 9, 10]
k = 4
```

Output
```cpp
getCoins(arr, k) = 0
```

## Pseudo code

```plaintext
function divideAmongK(arr, n, k, limit):
    cnt = 0
    current_sum = 0
    
    for i=0 to n-1:
        if current_sum + arr[i] >= limit:
            cnt +=1
            current_sum = 0
        else:
            current_sum += arr[i]
            
    return cnt>=k

function getCoins(arr, k):
    n = arr.size()
    e = 0
    s = 0
    
    for i=0 to n-1:
        e += arr[i]
    
    mid
    ans
    
    while s <= e:
        mid = (s+e)/2
         
        isPossible = divideAmongK(arr, n, k, mid)

        if isPossible:
            s = mid + 1
            ans = mid
        else:
            e = mid - 1
    
    return ans
```