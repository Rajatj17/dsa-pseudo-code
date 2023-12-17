## Problem Statement
You are given a directed or undirected graph with `V` vertices and a list of edges. You need to determine whether the graph contains any cycle or not.

You need to complete the function `contains_cycle` to solve the problem. This function takes an integer `V` and a vector of pair of integers `edges`, where each pair `(x, y)` represents an edge from vertex `x` to vertex `y`. The function should return true if the graph contains any cycle, and false otherwise.

## Example
Input: 
```cpp
V = 4
edges = {{0,1},{1,2},{2,3},{3,0}}
```
Output:
```
true
```
Explanation: In this example, the graph contains a cycle 0 -> 1 -> 2 -> 3 -> 0.

Input:
```cpp
V = 4
edges = {{0,1},{1,2},{2,3}}
```
Output:
```
false
```
Explanation: In this example, the graph does not contain any cycle.

## Pseudo code
```
class Graph {
    list<int> *l;
    int V;
    
    Graph(int V) {
        this->V = V;
        l = new list<int>[V];
    }

    void addEdge(int x, int y, bool directed = true) {
        l[x].push_back(y);

        if (!directed) {
            l[y].push_back(x);
        }
    }

    bool cycle_helper(int node, bool *visited, bool *stack) {

        visited[node] = true;
        stack[node] = true;

        for (int nbr : l[node]) {
            if (stack[nbr] == true) {
                return true;
            }
            else if (visited[nbr] == false) {
                bool cycle_mila = cycle_helper(nbr, visited, stack);
                if (cycle_mila == true) {
                    return true;
                }
            }
        }

        stack[node] = false;
        return false;
    }

    bool contains_cycle() {
        bool *visited = new bool[V];
        bool *stack = new bool[V];
        
        for (int i = 0; i < V; i++) {
            visited[i] = stack[i] = false;
        }
        return cycle_helper(0, visited, stack);
    }
};

bool contains_cycle(int V,vector<pair<int,int> > edges){
    Graph g(V);
    for(auto edge : edges){
        g.addEdge(edge.first,edge.second);
    }
    return g.contains_cycle();
}
```