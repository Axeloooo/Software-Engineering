# Hashmap

---

## Table of Contents

- [383 Ransom Note](#383-ransom-note)

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

- **Time Complexity:** O(n + m)
- **Space Complexity:** O(n)

---
