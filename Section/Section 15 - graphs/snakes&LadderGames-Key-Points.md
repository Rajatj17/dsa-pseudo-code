## Problem Statement
You are playing a board game and the board has snakes and ladders on it. You want to find the minimum number of dice throws required to reach the destination from the source. You are given an integer `n` which represents the total number of cells in the board, a list of pairs `snakes` representing the starting and ending positions of snakes, and a list of pairs `ladders` representing the starting and ending positions of ladders. 

You need to write a function `min_dice_throws` to calculate the minimum number of dice throws required using the given snakes and ladders.

## Input
- An integer `n` (1 <= n <= 10^5): representing the total number of cells in the board.
- A list of pairs `snakes`: Each pair represents the starting and ending positions of a snake.
- A list of pairs `ladders`: Each pair represents the starting and ending positions of a ladder.

## Output
- An integer: representing the minimum number of dice throws required to reach the destination from the source.

## Example

```plaintext
Input:
n = 30
snakes = {(11, 26), (16, 6), (19, 7), (27, 3)}
ladders = {(5, 8), (10, 15), (20, 29), (22, 28)}

Output:
3
```

## Pseudo code for the C++ code
```plaintext
class Graph{
    list<int> *l;
    int V;
    
public:
    Graph(int V){
        this->V = V;
        l = new list<int>[V+1];
    }
    void addEdge(int u,int v){
        l[u].push_back(v);
    }
    
    int minCostBFS(int src,int dest){
        queue<int> q;
        vector<bool> visited(V,false);
        vector<int> dist(V,0);
        
        q.push(src);
        visited[src] = true;
        dist[src] = 0;
        
        while(!q.empty()){
            int f = q.front();
            q.pop();
            
            for(int nbr : l[f]){
                if(!visited[nbr]){
                    q.push(nbr);
                    visited[nbr] = true;
                    dist[nbr] = dist[f] + 1;
                }
            }
        }
        return dist[dest];
    }

};

int min_dice_throws(int n,vector<pair<int,int> > snakes, vector<pair<int,int> > ladders){
    vector<int> board(n+1,0);
    
    //board to graph conversion
    for(auto sp: snakes){
        int s = sp.first;
        int e = sp.second;
        board[s] = e - s;
    }
    
    for(auto lp: ladders){
        int s = lp.first;
        int e = lp.second;
        board[s] = e - s;
    }
    
    //Graph
    Graph g(n+1);
    for(int u=1;u<n;u++){
        for(int dice=1;dice<=6;dice++){
            int v = u + dice;
            v += board[v];
            if(v<=n){
                g.addEdge(u,v);
            }
        }

    }
    return g.minCostBFS(1,n);
}
```