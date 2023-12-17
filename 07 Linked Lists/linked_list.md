## Problem Statement
You are given a C++ code that performs various operations on a singly linked list. You need to write the pseudo code for the given C++ code. The tasks include inserting a node at the head or in the middle of the linked list, reversing the linked list using both iterative and recursive methods, merging two sorted linked lists, finding the midpoint of the linked list, and performing merge sort on the linked list.

## Pseudo code
```plaintext
class node{
    public:
        int data;
        node* next;

        node(int data){
            this->data = data;
            next = NULL;
        }
};

function insertAtHead(head, data){
    if(head==NULL){
        head = new node(data);
        return;
    }
    node n = new node(data);
    n->next = head;
    head = n;
}

function insertInMiddle(head, data, pos){
    if(pos==0){
        insertAtHead(head, data);
    }
    else{
        node temp = head;
        for jump=1 to pos-1 do
            temp = temp->next
        node n = new node(data);
        n->next = temp->next;
        temp->next = n;
    }
}

function recReverse(head){
    if(head==NULL or head->next==NULL){
        return head;
    }
    node sHead = recReverse(head->next);
    head->next->next = head;
    head->next = NULL;
    return sHead;
}

function reverse(head){
    prev = NULL;
    current = head;
    while(current!=NULL){
        temp = current->next;
        current->next = prev;
        prev = current;
        current = temp;
    }
    head = prev;
    return;
}

function kReverse(head, k){
    if(head==NULL){
        return NULL;
    }
    prev = NULL;
    current = head;
    temp;
    cnt = 1;
    while(current!=NULL and cnt<=k){
        temp = current->next;
        current->next = prev;
        prev = current;
        current = temp;
        cnt++;
    }
    if(temp!=NULL){
        head->next = kReverse(temp, k);
    }
    return prev;
}

function merge(a, b){
    if(a==NULL){
        return b;
    }
    if(b==NULL){
        return a;
    }
    node c;
    if(a->data < b->data){
        c = a;
        c->next = merge(a->next, b);
    }
    else{
        c = b;
        c->next = merge(a, b->next);
    }
    return c;
}

function midPoint(head){
    slow = head;
    fast = head->next;
    while(fast!=NULL and fast->next!=NULL){
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

function mergeSort(head){
    if(head==NULL or head->next==NULL){
        return head;
    }
    mid = midPoint(head);
    a = head;
    b = mid->next;
    mid->next = NULL;
    a = mergeSort(a);
    b = mergeSort(b);
    return merge(a, b);
}

function printLL(head){
    while(head!=NULL){
        print head->data;
        head = head->next;
    }
}
```

The pseudo code includes the necessary functions and classes to perform various operations on the linked list, including inserting a node, reversing the list, merging, finding the midpoint, and performing merge sort.
