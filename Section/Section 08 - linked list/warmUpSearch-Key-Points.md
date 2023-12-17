#include<bits/stdc++.h>
using namespace std;


class node{
public:
    int data;
    node* next;

    node(int data){
        this->data = data;
        next = NULL;
    }
};


bool isPresent(node * head, int key){
    //Traverse the linked list and check if the key is present
    node * temp = head;  //create a temporary node and initialize it with head
    while(temp!=NULL){  //loop through the linked list
        if(temp->data==key){  //check if the current node's data is equal to the key
            return true;  //return true if key is found
        }       
        temp = temp->next;  //move to the next node
    }
    return false;  //return false if key is not found
}