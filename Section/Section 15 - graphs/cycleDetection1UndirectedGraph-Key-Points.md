## Problem Statement

You are given a directed graph with `V` vertices and a list of edges. Your task is to determine if the graph contains a cycle.

You need to implement the function `contains_cycle` which takes the number of vertices `V` and a list of edges as input and returns `true` if the graph contains a cycle, otherwise `false`.

The function `contains_cycle` should create a graph using the given number of vertices and edges, and then check if the graph contains a cycle using the `Graph` class provided.

## Example

Input
```cpp
V = 4
edges = {{0, 1}, {1, 2}, {2, 3}, {3, 0}}
```

Output
```cpp
true
```

Input
```cpp
V = 3
edges = {{0, 1}, {1, 2}}
```

Output
```cpp
false
```

## Pseudo code

```plaintext
class Graph {
    list l
    int V

    method Graph(V):
        create a list of size V
        set V = V

    method addEdge(x, y, directed = true):
        l[x].push_back(y)
        if (!directed):
            l[y].push_back(x)

    method cycle_helper(node, visited, parent):
        visited[node] = true
        for each nbr in l[node]:
            if (!visited[nbr]):
                cycle_mila = cycle_helper(nbr, visited, node)
                if (cycle_mila):
                    return true
            else if (nbr != parent):
                return true
        return false

    method contains_cycle():
        visited = new array of booleans of size V
        for i = 0 to V-1:
            visited[i] = false
        return cycle_helper(0, visited, -1)

function contains_cycle(V, edges):
    create a graph g with V vertices
    for each edge in edges:
        g.addEdge(edge.first, edge.second)
    return g.contains_cycle()
```