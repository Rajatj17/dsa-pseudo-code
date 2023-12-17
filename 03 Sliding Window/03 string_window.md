## Problem Statement

Given a string `s` and a pattern `p`, find the minimum window in `s` which will contain all the characters in `p`. If there is no such window in `s` that covers all characters in `p`, return an empty string.

## Example

Input
```cpp
s = "ADOBECODEBANC"
p = "ABC"
```

Output
```cpp
"BANC"
```

Input
```cpp
s = "aa"
p = "a"
```

Output
```cpp
"a"
```

## Pseudo code

```cpp
find_window(string s, string p){

    int FP[256] = {0}; //Array as a Freq Map for pattern
    int FS[256] = {0}; //Array as a Freq Map for the current window in the string

    for(int i=0;i<p.length();i++){
        FP[ps[i]]++;
    }

    int cnt = 0;
    int start = 0;
    int start_idx = -1;
    int min_so_far = INT_MAX;
    int window_size ;

    for(int i=0 ; i < s.length(); i++){
        char ch = s[i];
        FS[ch]++;

        if(FP[ch]!=0 and FS[ch]<= FP[ch]){
            cnt += 1;
        }

        if(cnt==p.length()){
            while(FP[s[start]]==0 or FS[s[start]] > FP[s[start]]){
                FS[s[start]]--;
                start++;
            }
            window_size = i - start + 1;
            if(window_size < min_so_far){
                min_so_far = window_size;
                start_idx = start;
            }

        }

    }
    if(start_idx==-1){
        return "No window found";
    }
    return s.substr(start_idx,min_so_far);

}
```