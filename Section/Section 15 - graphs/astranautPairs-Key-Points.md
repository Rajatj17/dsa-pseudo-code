## Problem Statement

You are given a list of astronaut pairs who are from different countries and get along with each other, and each pair is made up of astronauts from different countries. Based on this list, you need to calculate the number of different pairs of astronauts that can be formed.

For example, if there are 5 astronauts and the list of astronaut pairs is given as [(0, 1), (2, 3), (0, 4)], then there are 7 different pairs of astronauts that can be formed:

- Pair 1: (0, 2)
- Pair 2: (0, 3)
- Pair 3: (0, 4)
- Pair 4: (1, 2)
- Pair 5: (1, 3)
- Pair 6: (1, 4)
- Pair 7: (2, 4)

Write a function `count_pairs` to take in the number of astronauts `N` and a list of astronaut pairs `astronauts`, and return the number of different pairs of astronauts that can be formed.

## Input

- The input parameters are:
  1. An integer `N` representing the total number of astronauts ( 2 ≤ N ≤ 10^5).
  2. A vector of pairs `astronauts` representing the list of astronaut pairs.

## Output

- The function should return an integer representing the number of different pairs of astronauts that can be formed based on the list of astronaut pairs.

## Example

```plaintext
Input
N = 5
astronauts = [(0, 1), (2, 3), (0, 4)]

Output
7
```

## Pseudo code 

```plaintext
Class Graph{
  list<int> *l;
  int V;
  Graph(int v)

  void addEdge(int i,int j,bool bidir=true)
  
  int traverseHelper(int s,bool *visited)

  int countAstronauts()

}

count_pairs(int N, vector<pair<int,int> > astronauts){
    
    Graph g(N)
    
    for(auto edge : astronauts){
        g.addEdge(edge.first,edge.second)
    }
    
    return g.countAstronauts()
}
```