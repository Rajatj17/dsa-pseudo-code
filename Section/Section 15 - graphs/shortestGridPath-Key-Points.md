## Problem Statement

You are given a grid of size m x n, containing non-negative integers. You need to find the shortest path from the top-left corner to the bottom-right corner of the grid, moving only right or down at any point in time.

Write a function `shortest_path` to calculate the minimal sum of numbers along a path from the top-left corner to the bottom-right corner.

### Input
- A 2D array of integers `grid` representing the grid of size m x n (1 ≤ m, n ≤ 100).

### Output
- Return the minimal sum along a path from the top-left corner to the bottom-right corner.

## Example

Input: 
```
grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
```

Output:
```
7
```

Explanation:
The path with minimum sum is (1→3→1→1→1), sum of this path is 7.

## Pseudo Code
```c++
class Node{
    public:
        int x,y;
        int dist;

        Node(int x,int y,int dist){
            this->x = x;
            this->y = y;
            this->dist = dist;
        }
};

class Compare{
    public:
    bool operator()(Node a,Node b){
        return a.dist <= b.dist;
    }
};

int shortest_path(vector<vector<int> > grid){
    int m = grid.size();
    int n = grid[0].size();
    int i = 0;
    int j = 0;
    
    vector<vector<int> > dist(m+1,vector<int>(n+1,INT_MAX));

    dist[i][j] = grid[0][0];
    set<Node,Compare> s;
    s.insert(Node(i,j,dist[0][0]));

    int dx[] = {0,0,1,-1};
    int dy[] = {1,-1,0,0};

    while(!s.empty()){
        auto it = s.begin();
        int cx = it->x;
        int cy = it->y;
        int cd = it->dist;
        s.erase(it);

        for(int k=0;k<4;k++){
            int nx = cx + dx[k];
            int ny = cy + dy[k];
            if(nx>=0 and nx<m and ny>=0 and ny<n and dist[nx][ny] > cd + grid[nx][ny]){
                Node temp(nx,ny,dist[nx][ny]);
                if(s.find(temp)!=s.end()){
                    s.erase(s.find(temp));
                }
                int nd = grid[nx][ny] + cd;
                dist[nx][ny] = nd;
                s.insert(Node(nx,ny,nd));
            }
        }

    }
    return dist[m-1][n-1];
}
```