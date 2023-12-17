## Problem Statement

You are given an array of integers and you need to find the maximum XOR value of any two integers in the array. 

Write a function `max_xor_pair` to find the maximum XOR value of any two integers in the given array.

## Input

- An array of integers `arr` of length `n` where 1 <= n <= 10^5.

## Output

- The maximum XOR value of any two integers in the given array.

## Example

```cpp
vector<int> arr = {3, 10, 5, 25, 2, 8};
int result = max_xor_pair(arr);
```

Output: 
```
28
```

## Pseudo Code

```
class node{
    node *left
    node *right
}

class trie{
    node*root

    trie(){
        root = new node()
    }

    insert(int n){
        node* temp = root
        for i=31 to 0:
            int bit = (n>>i)&1
            if bit==0:
                if temp->left==NULL:
                    temp->left = new node()
                temp = temp->left
            else:
                if temp->right==NULL:
                    temp->right = new node()
                temp = temp->right
        //Insertion is Done
    }

    max_xor_helper(int value){
        int current_ans = 0
        node* temp = root
        for j=31 to 0:
            int bit =(value>>j)&1
            if bit==0:
                if temp->right!=NULL:
                    temp = temp->right
                    current_ans += (1<<j)
                else:
                    temp = temp->left
            else:
                if temp->left!=NULL:
                    temp = temp->left
                    current_ans += (1<<j)
                else:
                    temp = temp->right

        return current_ans
    }

    max_xor(vector<int> input,int n){
        int max_xor = 0
        for i=0 to n:
            int value = input[i]
            insert(value)
            int current_xor = max_xor_helper(value)
            max_xor = max(max_xor,current_xor)

        return max_xor
    }

}

max_xor_pair(vector<int> arr){
    trie t
    return t.max_xor(arr,arr.size())
}
```