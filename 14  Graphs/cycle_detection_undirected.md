## Problem Statement
You are given a list of edges representing a graph. You need to determine if the graph contains a cycle or not. A cycle exists in a graph if there is a closed path (i.e., a path that starts and ends at the same vertex) in the graph. Your task is to implement a function that takes the number of vertices and a list of edges and returns true if the graph contains a cycle, and false otherwise. 

## Input
- An integer V representing the number of vertices in the graph, where 1 <= V <= 10^5.
- A list of pairs of integers representing the edges of the graph. Each pair represents an edge between two vertices, and the vertices are 0-indexed.

## Output
- A boolean value indicating whether the graph contains a cycle or not. 

## Example
``` 
Input:
V = 3
edges = [(0, 1), (1, 2)]

Output:
0

Input:
V = 3
edges = [(0, 1), (1, 2), (2, 0)]

Output:
1
``` 

## Pseudo code
``` 
class Graph{
	list l
	int V

	Graph(V){
		this->V = V
		l = new list[V]
	}

	addEdge(x, y){
		l[x].push_back(y)
		l[y].push_back(x)
	}

	bool dfs(node, visited, parent){
		visited[node] = true

		for nbr in l[node]:
			if !visited[nbr]:
				nbrFoundACycle = dfs(nbr, visited, node)
				if nbrFoundACycle:
					return true

			else if nbr != parent:
				return true

		return false
	}

	bool contains_cycle(){
		visited = array of size V, initialized with false
		return dfs(0, visited, -1)
	}
}

contains_cycle(V, edges){
    Create an instance of Graph with V vertices
    for each edge in edges:
    	Add the edge to the graph

    Return graph.contains_cycle()
}

Main(){
	Create graph g with 3 vertices
	Add edges (0, 1) and (1, 2) to g

	Print g.contains_cycle()
}
```