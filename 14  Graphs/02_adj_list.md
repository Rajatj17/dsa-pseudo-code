## Problem Statement
You are given a C++ program that represents a graph using an adjacency list. Your task is to write the pseduo code for this C++ program.

## Example
### Input
```cpp
vector<string> cities = {"Delhi","London","Paris","New York"};
Graph g(cities);

g.addEdge("Delhi","London");
g.addEdge("New York","London");
g.addEdge("Delhi","Paris");
g.addEdge("Paris","New York");

g.printAdjList();
```

### Output
```
Delhi-->London,Paris,
London-->New York,Delhi,
Paris-->New York,Delhi,
New York-->London,Paris,
```

## Pseudo code
```plaintext
class Node{
    name
    nbrs
    Node(name)
}

class Graph{
    m

    Graph(cities)
    addEdge(x, y, undir = false)
    printAdjList()
}

main()
```