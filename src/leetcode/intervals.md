# Intervals

---

## Table of Contents

- [228. Summary Ranges](#228-summary-ranges)

---

## 228. Summary Ranges

- **LeetCode Link:** [Summary Ranges](https://leetcode.com/problems/summary-ranges/)
- **Difficulty:** Easy
- **Topics:** Array
- **Company:** Google

### 🧠 Problem Statement

> You are given a sorted unique integer array nums.
>
> A range [a,b] is the set of all integers from a to b (inclusive).
>
> Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
>
> Each range [a,b] in the list should be output as:
>
> "a->b" if a != b
> "a" if a == b
>
> Example 1:
>
> ```txt
> Input: nums = [0,1,2,4,5,7]
> Output: ["0->2","4->5","7"]
> Explanation: The ranges are:
> [0,2] --> "0->2"
> [4,5] --> "4->5"
> [7,7] --> "7"
> ```
>
> Example 2:
>
> ```txt
> Input: nums = [0,2,3,4,6,8,9]
> Output: ["0","2->4","6","8->9"]
> Explanation: The ranges are:
> [0,0] --> "0"
> [2,4] --> "2->4"
> [6,6] --> "6"
> [8,9] --> "8->9"
> ```

### 🧩 Approach

To solve the problem of summarizing ranges in a sorted unique integer array, we can use a straightforward approach by iterating through the array and identifying consecutive sequences of numbers. Here's a step-by-step breakdown of the approach:

1. **Initialization**: Start by initializing an empty list to store the resulting ranges and a variable to keep track of the starting number of the current range.
2. **Iterate through the array**: Loop through the array using an index. For
   each number, check if it is the start of a new range or part of an existing range.
3. **Identify ranges**: If the current number is consecutive to the previous number (i.e., `nums[i] == nums[i-1] + 1`), continue to the next number. If not, it means the current range has ended.
4. **Store the range**: When a range ends, check if the start and end of the range are the same. If they are, add just the start number to the result list. If they are different, add the range in the format "start->end".
5. **Handle the last range**: After the loop, ensure to add the last identified range to the result list.
6. **Return the result**: Finally, return the list of summarized ranges.

### 💡 Solution

```python
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        """
        Summarize ranges in a sorted unique integer array.

        Args:
            nums (List[int]): A sorted unique integer array.

        Returns:
            List[str]: A list of summarized ranges.
        """
        ans: List[str] = []
        i: int = 0

        while i < len(nums):
            start: int = nums[i]

            while i < len(nums) - 1 and nums[i] + 1 == nums[i + 1]:
                i += 1

            if start != nums[i]:
                ans.append(str(start) + "->" + str(nums[i]))
            else:
                ans.append(str(nums[i]))

            i += 1

        return ans
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(n)`

---
