## Problem Statement
You are given a C++ program that represents a graph using an adjacency list and provides functionality to add edges and print the adjacency list. The program uses a class `Graph` to represent a graph and provides `addEdge` to add edges and `printAdjList` to print the adjacency list.

## Example
#### Input
```
Graph g(6);
g.addEdge(0,1);
g.addEdge(0,4);
g.addEdge(2,1);
g.addEdge(3,4);
g.addEdge(4,5);
g.addEdge(2,3);
g.addEdge(3,5);
g.printAdjList();
```

#### Output
```
0-->1,4,
1-->0,2,
2-->1,3,
3-->4,2,5,
4-->0,3,5,
5-->4,3,
```

## Pseudo code
```plaintext
Class Graph:
    V
    l
    
    Graph(v):
        V = v
        l = new list of V elements
        
    addEdge(i,j,undir=true):
        l[i].push_back(j)
        if undir is true:
            l[j].push_back(i)
        
    printAdjList():
        for i=0 to V-1:
            Print i-->,
            for node in l[i]:
                Print node , 
            Print new line
        
Main:
    g = Graph(6)
    g.addEdge(0,1)
    g.addEdge(0,4)
    g.addEdge(2,1)
    g.addEdge(3,4)
    g.addEdge(4,5)
    g.addEdge(2,3)
    g.addEdge(3,5)
    g.printAdjList()
```