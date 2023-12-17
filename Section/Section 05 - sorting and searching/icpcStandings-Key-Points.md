## Problem Statement

You are given a list of teams along with their rankings. The badness of a team is defined as the difference between its actual position and its rank. Your task is to calculate the minimum badness that can be achieved by arranging the teams in such a way that the badness is minimized.

Write a function `badness` to calculate the minimum badness that can be achieved.

## Input

- A vector of pairs `teams` containing the name and rank of the teams.

## Output

- Return an integer representing the minimum badness that can be achieved.

## Example

Input
```cpp
teams = {{"TeamA", 3}, {"TeamB", 1}, {"TeamC", 2}}
```

Output
```cpp
1
```

## Pseudo code

```plaintext
function badness(teams: vector of pairs) -> integer
    n = teams.size()
    cnt = array of n+1 elements initialized with 0
    
    for i = 0 to n-1
        cnt[teams[i].second]++
    
    pos = 1
    sum = 0
    for i = 1 to n
        while cnt[i] > 0
            sum += abs(pos - i)
            cnt[i]--
            pos++
    
    return sum
```