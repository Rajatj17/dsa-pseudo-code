## Problem Statement

You are given a graph and you are required to implement a function that performs Breadth First Search (BFS) on the graph. The function takes a source vertex and an optional destination vertex. The function should print the shortest distance of each vertex from the source and the path from the source to the destination if provided.

## Input
- The input to the function will be a source vertex `source`.
- The input to the function will also be an optional destination vertex `dest`.

## Output
- The function should print the shortest distance of each vertex from the source.
- The function should also print the path from the source to the destination if the destination is provided.

## Example
```cpp
Graph g(7);
g.addEdge(0,1);
g.addEdge(1,2);
g.addEdge(2,3);
g.addEdge(3,5);
g.addEdge(5,6);
g.addEdge(4,5);
g.addEdge(0,4);
g.addEdge(3,4);
g.bfs(1,6);
```

#### Output
```
Shortest dist to 0 is 1
Shortest dist to 1 is 0
Shortest dist to 2 is 1
Shortest dist to 3 is 2
Shortest dist to 4 is 3
Shortest dist to 5 is 3
Shortest dist to 6 is 4
1-- 2-- 3-- 5-- 6
```
  
## Pseudocode
```plaintext
Class Graph:
    Method Graph(int v):
        Initialize V as v
        Create an array of list l of size V

    Method addEdge(int i, int j, bool undir):
        Add j to the list of i
        If undir is true, add i to the list of j

    Method bfs(int source, int dest):
        Create a queue q
        Create a boolean array visited of size V initialized with false
        Create an integer array dist of size V initialized with 0
        Create an integer array parent of size V

        For i from 0 to V-1:
            Set parent[i] to -1

        Push source into q
        Set visited[source] to true
        Set parent[source] to source
        Set dist[source] to 0

        While q is not empty:
            Set f to the front element of q
            Pop from q

            For each nbr in l[f]:
                If nbr is not visited:
                    Push nbr into q
                    Set parent[nbr] to f
                    Set dist[nbr] to dist[f] + 1
                    Set visited[nbr] to true

        For i from 0 to V-1:
            Print "Shortest dist to i is dist[i]"

        If dest is not -1:
            Set temp to dest
            While temp is not equal to source:
                Print temp
                Set temp to parent[temp]
            Print source
```