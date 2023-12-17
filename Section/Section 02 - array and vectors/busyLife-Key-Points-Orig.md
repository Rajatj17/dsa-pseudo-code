Key points to solve the problem:

1. Sort the activity vector based on the finish time of the activities.
2. Initialize count as 1 and finish time with the finish time of the first activity.
3. Iterate through the activities, checking if the start time of the current activity is greater than or equal to the finish time.
4. If it is, increment the count of activities and update the finish time with the finish time of the current activity.

To follow up on this pseudo code, the interviewer can ask the following questions:
1. Can you explain the logic behind the compare function and how it's used in the sort method?
2. Can you walk me through the for loop and how it helps in counting the compatible activities?
3. How would you handle edge cases such as an empty vector or activities with negative times?

Time Complexity: O(n log n) - due to sorting the activities
Space Complexity: O(1) - constant space used, not dependent on the input size.