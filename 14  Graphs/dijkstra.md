## Problem Statement
You are given a graph `G` consisting of `n` nodes and `m` edges. Each edge has a weight associated with it. You are also given a source node `src` and a destination node `dest`. You need to find the shortest path from the source node to the destination node using Dijkstra's algorithm and return the length of the shortest path.

## Input
- A graph `G` consisting of `n` nodes and `m` edges.
- The source node `src`.
- The destination node `dest`.

## Output
- The length of the shortest path from the source node to the destination node.

## Example
```cpp
int main(){

	Graph g(5);
	g.addEdge(0,1,1);
	g.addEdge(1,2,1);
	g.addEdge(0,2,4);
	g.addEdge(0,3,7);
	g.addEdge(3,2,2);
	g.addEdge(3,4,3);

	cout << g.dijkstra(0,4)<<endl; // Output: 6
}
```

## Pseudo code
```plaintext
Class Graph{
    int V
    list<pair<int,int> > *l

    constructor Graph(int v)
        V = v
        l = new list<pair<int,int> >[V]

    method addEdge(int u,int v,int wt,bool undir)
        l[u].push_back({wt,v})
        if undir is true:
            l[v].push_back({wt,u})

    method dijkstra(int src,int dest)
        dist = new vector of size V with all values initialized to INT_MAX
        s = new set of pairs

        dist[src] = 0
        s.insert({0,src})

        while s is not empty:
            it = s.begin()
            node = it->second
            distTillNow = it->first
            s.erase(it)

            for each nbrPair in l[node]:
                nbr = nbrPair.second
                currentEdge = nbrPair.first

                if distTillNow + currentEdge < dist[nbr]:
                    f = s.find({dist[nbr],nbr})
                    if f != s.end():
                        s.erase(f)
                    dist[nbr] = distTillNow + currentEdge
                    s.insert({dist[nbr],nbr})

        for i=0 to V-1:
            print "Node i " + i + " Dist " + dist[i]

        return dist[dest]
}

function main():
    g = new Graph(5)
    g.addEdge(0,1,1,true)
    g.addEdge(1,2,1,true)
    g.addEdge(0,2,4,true)
    g.addEdge(0,3,7,true)
    g.addEdge(3,2,2,true)
    g.addEdge(3,4,3,true)

    print g.dijkstra(0,4) // Output: 6
```