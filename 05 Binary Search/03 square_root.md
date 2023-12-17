## Problem Statement
You are given a number N and an integer P. Your task is to find the square root of N correct up to P decimal places.

## Input
- An integer N (1 <= N <= 10^9) where N is the number whose square root is to be found.
- An integer P (1 <= P <= 10) where P is the number of decimal places upto which the square root is to be found.

## Output
- Print the square root of N correct upto P decimal places.

## Example

Input:  
N = 10  
P = 3  

Output:  
3.162  

## Pseudo code
```
function square_root(N, P) 
    s = 0
    e = N
    ans = 0

    while s <= e do
        mid = (s + e) / 2
        if mid * mid == N then
            return mid
        else if mid * mid < N then
            ans = mid
            s = mid + 1
        else
            e = mid - 1
        end if
    end while

    inc = 0.1

    for place = 1 to P do
        while ans * ans <= N do
            ans = ans + inc
        end while

        ans = ans - inc
        inc = inc / 10.0
    end for

    return ans
end function

main()
    read n, p
    result = square_root(n, p)
    print result
end main
```