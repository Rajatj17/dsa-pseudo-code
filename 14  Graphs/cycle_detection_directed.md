## Problem Statement

You are given a graph and you need to determine if the graph contains any cycle. A cycle is formed when there is a path from a vertex back to itself. Your task is to write a function `contains_cycle` to check whether the given graph contains any cycle.

### Input
- An integer `V` representing the number of vertices in the graph.
- A list of pairs of integers `edges`, where each pair represents an edge between two vertices.

### Output
- Return `true` if the graph contains a cycle, otherwise return `false`.

## Example

Input:
```
V = 3
edges = [(0, 1), (1, 2), (2, 0)]
```

Output:
```
true
```

## Pseudocode

```plaintext
Class Graph {
    list l
    integer V

    Graph(V):
        V = V
        l = new list of size V

    addEdge(x, y):
        l[x] append y

    dfs(node, visited, stack):
        visited[node] = true
        stack[node] = true
        for nbr in l[node]:
            if stack[nbr] is true:
                return true
            else if visited[nbr] is false:
                nbrFoundACycle = dfs(nbr, visited, stack)
                if nbrFoundACycle is true:
                    return true
        stack[node] = false
        return false

    contains_cycle():
        visited = new vector of size V initialized with false
        stack = new vector of size V initialized with false
        for i = 0 to V-1:
            if visited[i] is false:
                if dfs(i, visited, stack) is true:
                    return true
        return false
}

contains_cycle(V, edges):
    create a graph g with V vertices
    for each edge in edges:
        g.addEdge(edge.first, edge.second)
    return g.contains_cycle()

main():
    create a graph g with 3 vertices
    g.addEdge(0, 1)
    g.addEdge(1, 2)
    g.addEdge(2, 0)
    print g.contains_cycle()
```
