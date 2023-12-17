## Problem Statement

You are tasked with implementing an LRU (Least Recently Used) Cache data structure. An LRU cache is a type of cache in which when the cache is full and a new element needs to be added, the least recently used element is removed to make space for the new one. The cache also needs to store the key-value pairs and support efficient queries to update the value and fetch the value for a given key.

## Input

The input consists of multiple method calls to the LRUCache class. Each method call will either insert a key-value pair, fetch the value for a given key, fetch the most recent key, or perform a check if a key exists in the cache.

## Output

The output for the given set of method calls is to be printed on the console.

## Example

```cpp
LRUCache lru(3); // create a cache with maximum size 3
lru.insertKeyValue("mango",10); // insert key 'mango' with value 10
lru.insertKeyValue("apple",20); // insert key 'apple' with value 20
lru.insertKeyValue("guava",30); // insert key 'guava' with value 30
cout << lru.mostRecentKey() <<endl; // print the most recent key in the cache
lru.insertKeyValue("mango",40); // update the value of key 'mango' to 40
cout << lru.mostRecentKey() <<endl; // print the most recent key in the cache
int *orders = lru.getValue("mango"); // fetch the value for key 'mango'
if(orders!=NULL){
    cout<<"Order of Mango "<<*orders <<endl; // print the value for key 'mango'
}
lru.insertKeyValue("banana",20); // insert key 'banana' with value 20
if(lru.getValue("apple")==NULL){ // check if key 'apple' exists
    cout<<"apple doesn't exist"; // print if key 'apple' doesn't exist
}
if(lru.getValue("guava")==NULL){ // check if key 'guava' exists
    cout<<"guava doesn't exist"; // print if key 'guava' doesn't exist
}
if(lru.getValue("banana")==NULL){ // check if key 'banana' exists
    cout<<"banana doesn't exist"; // print if key 'banana' doesn't exist
}
if(lru.getValue("mango")==NULL){ // check if key 'mango' exists
    cout<<"mango doesn't exist"; // print if key 'mango' doesn't exist
}
```

## Pseudo code

```cpp
class LRUCache {
public:
    int maxSize;
    list<Node> l;
    unordered_map<string, list<Node>::iterator > m;

    LRUCache(int maxSize) {
        // initialize max size
    }

    void insertKeyValue(string key, int value) {
        // insert or update key value pair
    }

    int* getValue(string key) {
        // return value for given key
    }

    string mostRecentKey() {
        // return most recent key
    }
}

int main() {
    // create an instance of LRUCache
    // perform method calls for the LRUCache instance
    return 0;
}
```