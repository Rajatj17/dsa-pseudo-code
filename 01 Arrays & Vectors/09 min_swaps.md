## Problem Statement

You are given an array of integers `arr` which may not be sorted. The task is to find the minimum number of swaps needed to sort the array in non-decreasing order.

You have to implement the `countMinSwaps` function which takes in the following parameter:
* `arr`: A vector of integers where 1 <= arr[i] <= 10^5

The function should return an integer which represents the minimum number of swaps needed to sort the array in non-decreasing order.

## Example

Input
```
arr = [5, 4, 3, 2, 1]
```
Output
```
2
```

## Pseudo code

```pseudo
Function countMinSwaps(arr):
    n = arr.size
    create pair array ap of size n
    for i from 0 to n-1:
        ap[i].first = arr[i]
        ap[i].second = i
    sort ap
    create boolean array visited of size n, initialized to false
    ans = 0
    for i from 0 to n-1:
        old_position = ap[i].second
        if visited[i] is true or old_position is equal to i:
            continue
        node = i
        cycle = 0
        while visited[node] is false:
            visited[node] = true
            next_node = ap[node].second
            node = next_node
            cycle = cycle + 1
        ans = ans + (cycle - 1)
    return ans
```

## C++ code
```cpp
#include <iostream>
#include<vector>
#include<algorithm>
using namespace std;

int countMinSwaps(vector<int> arr){

    // Pseudo code logic

}

int main() {
    vector<int> arr{5,4,3,2,1};
    cout<<countMinSwaps(arr)<<endl;
    return 0;
}
```