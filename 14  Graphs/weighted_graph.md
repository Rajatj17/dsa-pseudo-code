## Problem Statement

You are given a list of edges in a weighted undirected graph. The graph is represented as an adjacency list, which is a list of lists. Each inner list represents a node and contains a list of tuples, where each tuple contains the weight and the number of the adjacent node.

You need to implement a Graph class with the following methods:
* `Graph(int v)`: Constructor which initializes the graph with v vertices.
* `void addEdge(int u, int v, int wt, bool undir)`: Adds an edge between nodes u and v with the given weight, and if `undir` is true, it adds the edge from v to u as well.

## Example

```plaintext
Input
    Graph g(5)
    g.addEdge(0,1,1)
    g.addEdge(1,2,2)
    g.addEdge(0,2,4)
    g.addEdge(0,3,7)
    g.addEdge(3,2,2)
    g.addEdge(3,4,3)

Output
    <No output required>
```

## Pseudo code

```pseudo
class Graph {

    int V
    list<pair<int,int>> *l
    
    Graph(int v):
        V = v
        l = new list<pair<int,int>>[V]

    addEdge(int u, int v, int wt, bool undir = true):
        l[u].push_back({wt, v})
        if undir:
            l[v].push_back({wt, u})
}
```