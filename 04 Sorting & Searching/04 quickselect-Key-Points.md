To find the kth smallest element in an array, the following pseudo-code can be applied:

```plaintext
function partition(a,s,e):
    pivot = a[e]
    i = s - 1
    for j from s to e-1:
        if a[j] < pivot:
            i++
            swap a[i] and a[j]
    swap a[i+1] and a[e]
    return i + 1

function quickselect(a, s, e, k):
    p = partition(a, s, e)
    if p == k:
        return a[p]
    else if k < p:
        return quickselect(a, s, p-1, k)
    else:
        return quickselect(a, p+1, e, k)

arr = [10, 5, 2, 0, 7, 6, 4]
n = length(arr)
k = input from user
print quickselect(arr, 0, n-1, k)
```

To follow-up, interviewer may ask:

1. Explain the working of the `quickselect` algorithm.
2. What is the time complexity of the `quickselect` algorithm?
3. What is the space complexity of the `quickselect` algorithm?
4. What are the potential drawbacks of the `quickselect` algorithm?

Time Complexity: The time complexity of the quickselect algorithm is O(n) on average, where n is the number of elements in the input array. In the worst case, the time complexity can be O(n^2) if the pivot selection always results in unbalanced partitions.

Space Complexity: The space complexity of the quickselect algorithm is O(1) as it only uses a constant amount of extra space for storing variables and indices.

Potential Drawbacks: The quickselect algorithm may have poor performance in the worst-case scenario, where the pivot selection always results in unbalanced partitions. This can lead to O(n^2) time complexity, which is undesirable.