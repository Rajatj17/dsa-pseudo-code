### Problem Statement

You are given an unsorted array of integers. Write a function to implement merge sort to sort the given array in ascending order.

### Input

- An unsorted array of integers.

### Output

- The given array in sorted order.

### Example

Input: 
arr = [10, 5, 2, 0, 7, 6, 4]

Output: 
0,2,4,5,6,7,10

### Pseudo code for merge sort

```plaintext
procedure merge(array, start, end)
    i = start
    m = (start + end) / 2
    j = m + 1
    create an empty array temp

    while (i <= m and j <= end) do
        if (array[i] < array[j]) then
            temp.push(array[i])
            i++
        else
            temp.push(array[j])
            j++

    // copy any remaining elements from the first subarray
    while (i <= m) do
        temp.push(array[i++])

    // or copy any remaining elements from the second subarray
    while (j <= end) do
        temp.push(array[j++])

    // copy the elements from temp back to the original array
    k = 0
    for idx = start to end do
        array[idx] = temp[k++]
    end for
end procedure

procedure mergesort(array, start, end)
    // base case
    if (start >= end) then
        return

    // recursive case
    mid = (start + end) / 2
    mergesort(array, start, mid)
    mergesort(array, mid + 1, end)
    merge(array, start, end)
end procedure
```