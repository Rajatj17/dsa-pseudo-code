To merge K sorted arrays, you can use a min heap to keep track of the smallest elements from each array. The basic algorithm is as follows:

1. Create a min heap and insert the first element of each array along with its array index and element index into the min heap.
2. Pop the top element from the min heap and push it to the output array. Then, if there are more elements in the same array, push the next element into the min heap.
3. Repeat step 2 until the min heap is empty.

Pseudo code:
```c++
vector<int> mergeKArrays(vector<vector<int> > arrays){
    priority_queue< vector<int> , vector<vector<int> > , greater<vector<int> > > q;
    vector<int> output;

    for(int i=0; i<arrays.size(); i++){
        int element = arrays[i][0];
        q.push({element, i, 0});
    }

    while(!q.empty()){
        auto top = q.top();
        q.pop();
        int element = top[0];
        int a_idx = top[1];
        int e_idx = top[2];
        
        output.push_back(element);

        if(e_idx + 1 < arrays[a_idx].size()){
            int next_element = arrays[a_idx][e_idx+1];
            q.push({next_element, a_idx, e_idx+1});
        }
    }

    return output;
}
```

The time complexity is O(n log k) where n is the total number of elements across all arrays and k is the number of arrays. The space complexity is O(k) for the min heap.

For interview follow-up, the interviewer can ask:
1. Can you optimize the space complexity of the algorithm?
2. Can you implement the same functionality using a different data structure, such as a custom heap or a priority queue with custom comparator?
3. How would you modify the algorithm if the arrays are extremely large and cannot fit into memory at once?

These questions can test the candidate's knowledge about optimization, custom data structures, and handling large datasets.