## Problem Statement
You are given an integer `mins` representing the number of minutes elapsed since midnight. Write a function `convert_to_digital_time` to convert this number into a digital time format of "HH:MM" where HH represents hours and MM represents minutes. The output time should be in 24-hour clock format. For example, if `mins` is 150, the output should be "02:30".

## Inputs
- `mins`: An integer representing the number of minutes elapsed since midnight (0 <= mins <= 1440)

## Output
- A string representing the digital time in the format "HH:MM"

## Example
```plaintext
Input
mins = 150

Output
"02:30"
```

## Pseudo code
```
function convert_to_digital_time(mins):
    hours := mins / 60
    minutes := mins % 60
    hrs_s := to_string(hours)
    min_s := minutes < 10 ? "0" + to_string(minutes) : to_string(minutes)
    return hrs_s + ":" + min_s
```