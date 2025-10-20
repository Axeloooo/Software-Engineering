# Math

---

## Table of Contents

- [9. Palindrome Number](#9-palindrome-number)
- [66. Plus One](#66-plus-one)
- [69. Sqrt(x)](#69-sqrtx)

---

## 9. Palindrome Number

- **LeetCode Link:** [Palindrome Number](https://leetcode.com/problems/palindrome-number/)
- **Difficulty:** Easy
- **Topic(s):** Math, String Manipulation
- **Company:** Meta

### 🧠 Problem Statement

> Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.
>
> Example 1:
>
> ```txt
> Input: x = 121
> Output: true
> Explanation: 121 reads as 121 from left to right and from right to left.
> ```
>
> Example 2:
>
> ```txt
> Input: x = -121
> Output: false
> Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
> ```
>
> Example 3:
>
> ```txt
> Input: x = 10
> Output: false
> Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
> ```

### 🧩 Approach

1. Convert the integer to a string.
2. Compare the string with its reverse.

### 💡 Solution

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        """
        Check if an integer is a palindrome.

        Args:
            x (int): The integer to check.

        Returns:
            bool: True if x is a palindrome, False otherwise.
        """
        if x < 0:
            return False

        s: str = str(x)
        return s == s[::-1]
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(n)`

---

## 66. Plus One

- **LeetCode Link:** [Plus One](https://leetcode.com/problems/plus-one/)
- **Difficulty:** Easy
- **Topic(s):** Math, Array
- **Company:** Microsoft

### 🧠 Problem Statement

> You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the `ith` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.
>
> Increment the large integer by one and return the resulting array of digits.
>
> Example 1:
>
> ```txt
> Input: digits = [1,2,3]
> Output: [1,2,4]
> Explanation: The array represents the integer 123.
> Incrementing by one gives 123 + 1 = 124.
> Thus, the result should be [1,2,4].
> ```
>
> Example 2:
>
> ```txt
> Input: digits = [4,3,2,1]
> Output: [4,3,2,2]
> Explanation: The array represents the integer 4321.
> Incrementing by one gives 4321 + 1 = 4322.
> Thus, the result should be [4,3,2,2].
> ```
>
> Example 3:
>
> ```txt
> Input: digits = [9]
> Output: [1,0]
> Explanation: The array represents the integer 9.
> Incrementing by one gives 9 + 1 = 10.
> Thus, the result should be [1,0].
> ```

### 🧩 Approach

1. Reverse the digits array.
2. Initialize a carry variable to 1 (to represent the increment).
3. Iterate through the reversed digits:
   - If the current digit is 9, set it to 0 (carry the 1).
   - Otherwise, increment the current digit and set carry to 0.
4. If there's still a carry after the loop, append 1 to the result.
5. Reverse the result back to the original order.

### 💡 Solution

```python
from typing import List

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        """
        Increment the large integer represented as an array of digits by one.

        Args:
            digits (List[int]): The array of digits representing the integer.

        Returns:
            List[int]: The resulting array of digits after incrementing by one.
        """
        digits = digits[::-1]
        carry: int = 1
        index: int = 0

        while carry:
            if index < len(digits):
                if digits[index] == 9:
                    digits[index] = 0
                else:
                    digits[index] += 1
                    carry = 0
            else:
                digits.append(1)
                carry = 0

            index += 1

        return digits[::-1]
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`

---

## 69. Sqrt(x)

- **LeetCode Link:** [Sqrt(x)](https://leetcode.com/problems/sqrtx/)
- **Difficulty:** Easy
- **Topic(s):** Math, Binary Search
- **Company:** Amazon

### 🧠 Problem Statement

> Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be non-negative as well.
>
> You must not use any built-in exponent function or operator.
>
> For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.
>
> Example 1:
>
> ```txt
> Input: x = 4
> Output: 2
> Explanation: The square root of 4 is 2, so we return 2.
> ```
>
> Example 2:
>
> ```txt
> Input: x = 8
> Output: 2
> Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
> ```

### 🧩 Approach

1. Initialize two pointers: `L` set to 0 and `R` set to `x`.
2. While `L` is less than or equal to `R`:
   - Calculate the midpoint `M` as the average of `L` and `R`.
   - If `M * M` is equal to `x`, return `M`.
   - If `M * M` is less than `x`, update `L` to `M + 1`.
   - If `M * M` is greater than `x`, update `R` to `M - 1`.
3. If no exact square root is found, return `R`.

### 💡 Solution

```python
class Solution:
    def mySqrt(self, x: int) -> int:
        """
        Compute the integer square root of a non-negative integer x.

        Args:
            x (int): The non-negative integer.

        Returns:
            int: The integer square root of x.
        """
        L: int = 0
        R: int = x

        while L <= R:
            M = (L + R) // 2
            M_squared = M * M

            if M_squared == x:
                return M

            if M_squared < x:
                L = M + 1
            else:
                R = M - 1

        return R
```

### 🧮 Complexity Analysis

- Time Complexity: `O(log n)`
- Space Complexity: `O(1)`
