# Hashmap

---

## Table of Contents

- [1. Two Sum](#1-two-sum)
- [205. Isomorphic Strings](#205-isomorphic-strings)
- [290. Word Pattern](#290-word-pattern)
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

## 205. Isomorphic Strings

- **LeetCode Link:** [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/)
- **Difficulty:** Easy
- **Topics:** Hash Table, String

### 🧠 Problem Statement

> Given two strings `s` and `t`, determine if they are isomorphic.
>
> Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.
>
> All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
>
> Example 1:
>
> ```txt
> Input: s = "egg", t = "add"
>
> Output: true
>
> Explanation:
>
> The strings s and t can be made identical by:
>
> Mapping 'e' to 'a'.
> Mapping 'g' to 'd'.
> ```
>
> Example 2:
>
> ```txt
> Input: s = "foo", t = "bar"
>
> Output: false
>
> Explanation:
>
> The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.
> ```
>
> Example 3:
>
> ```txt
> Input: s = "paper", t = "title"
>
> Output: true
> ```

### 🧩 Approach

Use hashmaps:

1. Create two hashmaps (dictionaries) to map characters from `s` to `t` and from `t` to `s`.
2. Iterate through the characters of both strings simultaneously:
   - For each character pair `(c1, c2)` from `s` and `t`:
     - Check if `c1` is already mapped to a different character than `c2` or if `c2` is already mapped to a different character than `c1`.
     - If either condition is true, return `False`.
     - Otherwise, update the mappings for `c1` to `c2` and `c2` to `c1`.
3. If all character pairs are processed without conflicts, return `True`.

### 💡 Solution

```python
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        """
        Check if two strings s and t are isomorphic.

        Args:
            s (str): First string.
            t (str): Second string.

        Returns:
            bool: True if s and t are isomorphic, False otherwise.
        """
        map_st: Dict[str, str] = {}
        map_ts: Dict[str, str] = {}

        for c1, c2 in zip(s, t):
            if (c1 in map_st and map_st[c1] != c2) or (
                c2 in map_ts and map_ts[c2] != c1
            ):
                return False

            map_st[c1] = c2
            map_ts[c2] = c1

        return True
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(n)`

---

## 290. Word Pattern

- **LeetCode Link:** [Word Pattern](https://leetcode.com/problems/word-pattern/)
- **Difficulty:** Easy
- **Topics:** Hash Table, String

### 🧠 Problem Statement

> Given a `pattern` and a string `s`, find if `s` follows the same pattern.
>
> Here follow means a full match, such that there is a bijection between a letter in `pattern` and a non-empty word in `s`. Specifically:
>
> Each letter in `pattern` maps to exactly one unique word in `s`.
> Each unique word in `s` maps to exactly one letter in `pattern`.
> No two letters map to the same word, and no two words map to the same letter.
>
> Example 1:
>
> ```txt
> Input: pattern = "abba", s = "dog cat cat dog"
>
> Output: true
>
> Explanation:
>
> The bijection can be established as:
>
> 'a' maps to "dog".
> 'b' maps to "cat".
> ```
>
> Example 2:
>
> ```txt
> Input: pattern = "abba", s = "dog cat cat fish"
>
> Output: false
> ```
>
> Example 3:
>
> ```txt
> Input: pattern = "aaaa", s = "dog cat cat dog"
>
> Output: false
> ```

### 🧩 Approach

Use hashmaps:

1. Split the string `s` into words.
2. CHeck if the length of `words` matches the length of `pattern`. If not, return `False`.
3. Create two hashmaps:
   - `map_pw`: Maps characters in `pattern` to words in `s`.
   - `map_wp`: Maps words in `s` to characters in `pattern`.
4. Iterate through the characters in `pattern` and the corresponding words in `s`:
   - For each character `c1` in `pattern` and word `c2`
     - Check if `c1` is already mapped to a different word than `c2` or if `c2` is already mapped to a different character than `c1`.
     - If either condition is true, return `False`.
     - Otherwise, update the mappings for `c1` to `c2` and `c2` to `c1`.
5. If all character-word pairs are processed without conflicts, return `True`.

### 💡 Solution

```python
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        """
        Check if the string s follows the same pattern as the given pattern.

        Args:
            pattern (str): The pattern string.
            s (str): The string to check against the pattern.

        Returns:
            bool: True if s follows the pattern, False otherwise.
        """
        words: List[str] = s.split()

        map_pw: Dict[str, str] = {}
        map_wp: Dict[str, str] = {}

        if len(words) != len(pattern):
            return False

        for c1, c2 in zip(pattern, words):
            if (c1 in map_pw and map_pw[c1] != c2) or (
                c2 in map_wp and map_wp[c2] != c1
            ):
                return False

            map_pw[c1] = c2
            map_wp[c2] = c1

        return True
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(n)`

---

## 383. Ransom Note

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
