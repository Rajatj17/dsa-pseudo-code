## Problem Statement

You are given an array of integers `input` of length `n`. You need to find the maximum XOR value between any pair of integers in the given array.

## Input
- An array of integers `input` of length `n`.

## Output
- The maximum XOR value between any pair of integers in the given array.

## Example

Input:
```
input = {3,10,5,25,9,2};
n = 6;
```

Output:
```
28
```

## Pseudo code

```plaintext
class node{
    left //0
    right // 1
};

class trie{
    root;

    trie(){
        root = new node();
    }

    insert(n){
        temp = root;
        for i from 31 to 0{
            bit = (n>>i)&1;
            if(bit==0){
                if(temp->left==NULL){
                    temp->left = new node();
                }
                temp = temp->left;
            }
            else{
                if(temp->right==NULL){
                    temp->right = new node();
                }
                temp = temp->right;
            }
        }
    }

    max_xor_helper(value){
        current_ans = 0;
        temp = root;
        for j from 31 to 0{
            bit =(value>>j)&1;
            if(bit==0){
                if(temp->right!=NULL){
                    temp = temp->right;
                    current_ans += (1<<j);
                }
                else{
                    temp = temp->left;
                }
            }
            else{
                if(temp->left!=NULL){
                    temp = temp->left;
                    current_ans += (1<<j);
                }
                else{
                    temp = temp->right;
                }
            }
        }
        return current_ans;
    }

    max_xor(input,n){
        max_xor = 0;
        for i from 0 to n-1{
            value = input[i];
            insert(value);
            current_xor = max_xor_helper(value);
            max_xor = max(max_xor,current_xor);
        }
        return max_xor;
    }
}

main(){
    input[] = {3,10,5,25,9,2};
    n = sizeof(input)/sizeof(int);
    t;
    print t.max_xor(input, n);
};
```