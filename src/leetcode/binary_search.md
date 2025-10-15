# Binary Search

---

## Table of Contents

- [35. Search Insert Position](#35-search-insert-position)

---

## 35. Search Insert Position

- **LeetCode Link:** [Search Insert Position](https://leetcode.com/problems/search-insert-position/)
- **Difficulty:** Easy
- **Topic(s):** Binary Search, Array
- **Company:** Amazon

### 🧠 Problem Statement

> Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
>
> You must write an algorithm with `O(log n)` runtime complexity.
>
> Example 1:
>
> ```txt
> Input: nums = [1,3,5,6], target = 5
> Output: 2
> ```
>
> Example 2:
>
> ```txt
> Input: nums = [1,3,5,6], target = 2
> Output: 1
> ```
>
> Example 3:
>
> ```txt
> Input: nums = [1,3,5,6], target = 7
> Output: 4
> ```

### 🧩 Approach

1. **Understanding the Problem**: We need to find the position of a target value in a sorted array. If the target is not present, we should determine where it can be inserted while maintaining the sorted order. The requirement for `O(log n)` time complexity suggests that we should use a binary search approach.
2. **Binary Search Algorithm**: We will use two pointers, `l` (left) and `r` (right), to represent the current search range. We will calculate the middle index `m` and compare the middle element with the target:
   - If `nums[m]` is equal to the target, we return `m`.
   - If the target is greater than `nums[m]`, we move the left pointer to `m + 1`.
   - If the target is less than `nums[m]`, we move the right pointer to `m - 1`.
3. **Insertion Point**: If the target is not found after the loop, the left pointer `l` will indicate the position where the target can be inserted to maintain the sorted order.

### 💡 Solution

```python
from typing import List

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        """
        Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

        Args:
            nums (List[int]): A list of distinct integers sorted in ascending order.
            target (int): The target integer to search for.

        Returns:
            int: The index of the target if found; otherwise, the index where it would be inserted to maintain sorted order.
        """
        l: int = 0
        r: int = len(nums) - 1

        while l <= r:
            m: int = (l + r) // 2

            if nums[m] == target:
                return m
            elif target > nums[m]:
                l = m + 1
            else:
                r = m - 1

        return l
```

### 🧮 Complexity Analysis

- Time Complexity: `O(log n)`
- Space Complexity: `O(1)`

---
