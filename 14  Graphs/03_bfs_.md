## Problem Statement

You are given a graph and a source node. You need to implement a Breadth First Search (BFS) algorithm to traverse and print all the nodes that are reachable from the given source node.

## Input
- The graph in form of edges depicting the connections between the nodes
- The source node from which the BFS traversal should begin

## Output
- The nodes visited during the BFS traversal starting from the source node


## Example

### Input
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
g.bfs(1);
```

### Output
```
1
0
2
4
3
5
6
```


## Pseudo code

```plaintext
class Graph{
    int V;
    list<int> *l;

    Graph(int v){
        V = v;
        l = new list<int>[V];
    }

    void addEdge(int i,int j,bool undir=true){
        l[i].push_back(j);
        if(undir){
            l[j].push_back(i);
        }
    }

    void bfs(int source){
        queue<int> q;
        bool *visited = new bool[V]{0};

        q.push(source);
        visited[source] = true;

        while(!q.empty()){
            int f = q.front();
            print f
            q.pop();

            for(auto nbr : l[f]){
                if(!visited[nbr]){
                    q.push(nbr);
                    visited[nbr] = true;
                }
            }
        }
    }
}

Graph g(7);
g.addEdge(0,1);
g.addEdge(1,2);
g.addEdge(2,3);
g.addEdge(3,5);
g.addEdge(5,6);
g.addEdge(4,5);
g.addEdge(0,4);
g.addEdge(3,4);
g.bfs(1);
```