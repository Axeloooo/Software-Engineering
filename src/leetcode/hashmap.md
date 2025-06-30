# Hashmap

---

## Table of Contents

- [1. Two Sum](#1-two-sum)
- [383 Ransom Note](#383-ransom-note)

---

## 1. Two Sum

- **LeetCode Link:** [Two Sum](https://leetcode.com/problems/two-sum/)
- **Difficulty:** Easy
- **Topics:** Array, Hash Table

### 🧠 Problem Statement

> Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
>
> You may assume that each input would have exactly one solution, and you may not use the same element twice.
>
> You can return the answer in any order.
>
> Example 1:
>
> ```txt
> Input: nums = [2,7,11,15], target = 9
> Output: [0,1]
> Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
> ```
>
> Example 2:
>
> ```txt
> Input: nums = [3,2,4], target = 6
> Output: [1,2]
> ```
>
> Example 3:
>
> ```txt
> Input: nums = [3,3], target = 6
> Output: [0,1]
> ```

### 🧩 Approach

1. Create a hashmap (dictionary) to store the indices of the numbers in `nums`.
2. Iterate through the `nums` array:
   - For each number, calculate the complement (`target - nums[i]`).
   - Check if the complement exists in the hashmap:
     - If it does, return the current index and the index of the complement.
     - If it doesn't, add the current number and its index to the hashmap.
3. If no solution is found, return an empty list (though the problem guarantees a solution).

### 💡 Solution

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
        Find indices of two numbers in nums that add up to target.

        Args:
            nums (List[int]): List of integers.
            target (int): Target sum.

        Returns:
            List[int]: Indices of the two numbers that add up to target.
        """
        h: Dict[int, int] = {}

        for i in range(len(nums)):
            h[nums[i]] = i

        for i in range(len(nums)):
            y: int = target - nums[i]

            if y in h and h[y] != i:
                return [i, h[y]]
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(n)`

---

## 383 Ransom Note

- **LeetCode Link:** [Ransom Note](https://leetcode.com/problems/ransom-note/)
- **Difficulty:** Easy
- **Topics:** Hash Table, String, Counting

### 🧠 Problem Statement

> Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.
>
> Each letter in `magazine` can only be used once in `ransomNote`.
>
> Example 1:
>
> ```txt
> Input: ransomNote = "a", magazine = "b"
> Output: false
> ```
>
> Example 2:
>
> ```txt
> Input: ransomNote = "aa", magazine = "ab"
> Output: false
> ```
>
> Example 3:
>
> ```txt
> Input: ransomNote = "aa", magazine = "aab"
> Output: true
> ```

### 🧩 Approach

1. Use a hashmap (dictionary) to count the occurrences of each character in the `magazine`.
2. Iterate through each character in the `ransomNote`:
   - If the character is not in the hashmap, return `False`.
   - If the character's count is 1, remove it from the hashmap.
   - If the character's count is greater than 1, decrement its count in the hashmap.
3. If all characters in the `ransomNote` can be matched with those in the `magazine`, return `True`.

### 💡 Solution

```python
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        """
        Check if ransomNote can be constructed from magazine using character counts.

        Args:
            ransomNote (str): The string to be constructed.
            magazine (str): The string from which characters can be used.

        Returns:
            bool: True if ransomNote can be constructed from magazine, False otherwise.
        """
        counter: Dict[str, int] = {}
        for c in magazine:
            if c in counter:
                counter[c] += 1
            else:
                counter[c] = 1

        for c in ransomNote:
            if c not in counter:
                return False
            elif counter[c] == 1:
                del counter[c]
            else:
                counter[c] -= 1

        return True
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n + m)`
- Space Complexity: `O(n)`

---
