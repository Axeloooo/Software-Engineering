# Two Pointers

---

## Table of Contents

- [125. Valid Palindrome](#125-valid-palindrome)

---

## 125. Valid Palindrome

- **LeetCode Link:** [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
- **Difficulty:** Easy
- **Topics:** String, Two Pointers

### 🧠 Problem Statement

> A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
>
> Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.
>
> Example 1:
>
> ```txt
> Input: s = "A man, a plan, a canal: Panama"
> Output: true
> Explanation: "amanaplanacanalpanama" is a palindrome.
> ```
>
> Example 2:
>
> ```txt
> Input: s = "race a car"
> Output: false
> Explanation: "raceacar" is not a palindrome.
> ```
>
> Example 3:
>
> ```txt
> Input: s = " "
> Output: true
> Explanation: s is an empty string "" after removing non-alphanumeric characters.
> ```
>
> Since an empty string reads the same forward and backward, it is a palindrome.

### 🧩 Approach

Use the **Two Pointers** approach:

1. Initialize two pointers, `l` at the start and `r` at the end of the string.
2. Move the left pointer `l` to the right until it points to an alphanumeric character.
3. Move the right pointer `r` to the left until it points to an alphanumeric character.
4. Compare the characters at `l` and `r` after converting them to lowercase.
5. If they are not equal, return `False`.
6. Move both pointers inward (`l` to the right and `r` to the left) and repeat steps 2-5 until the pointers meet or cross.
7. If all characters match, return `True`.

### 💡 Solution

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        """
        Check if the given string is a palindrome after removing non-alphanumeric characters
        and converting to lowercase.

        Args:
            s (str): The input string to check.

        Returns:
            bool: True if the string is a palindrome, False otherwise.
        """
        l, r = 0, len(s) - 1

        while l < r:
            while l < r and not self.isalnum(s[l]):
                l += 1
            while r > l and not self.isalnum(s[r]):
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l, r = l + 1, r - 1
        return True

    def isalnum(self, c: str):
        """
        Check if the character is alphanumeric.

        Args:
            c (str): The character to check.

        Returns:
            bool: True if the character is alphanumeric, False otherwise.
        """
        return (
            ord("A") <= ord(c) <= ord("Z")
            or ord("a") <= ord(c) <= ord("z")
            or ord("0") <= ord(c) <= ord("9")
        )
```

### 🧮 Complexity Analysis

- TIme Complexity: `O(n)`
- Space Complexity: `O(1)`

---
