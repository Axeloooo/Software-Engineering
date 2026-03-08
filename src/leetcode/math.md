# Math

---

## Table of Contents

- [9. Palindrome Number](#9-palindrome-number)
- [66. Plus One](#66-plus-one)
- [69. Sqrt(x)](#69-sqrtx)
- [2169. Count Operations to Obtain Zero](#2169-count-operations-to-obtain-zero)

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

---

## 2169. Count Operations to Obtain Zero

- **LeetCode Link:** [Count Operations to Obtain Zero](https://leetcode.com/problems/count-operations-to-obtain-zero/)
- **Difficulty:** Easy
- **Topic(s):** Math, Simulation, Weekly Contest 280
- **Company:** Capital One

### 🧠 Problem Statement

> You are given two non-negative integers `num1` and `num2`.
>
> In one operation, if `num1 >= num2`, you must subtract `num2` from `num1`, otherwise subtract `num1` from `num2`.
>
> - For example, if `num1 = 5` and `num2 = 4`, subtract `num2` from `num1`, thus obtaining `num1 = 1` and `num2 = 4`. However, if `num1 = 4` and `num2 = 5`, after one operation, `num1 = 4` and `num2 = 1`.
>
> Return the number of operations required to make either `num1 = 0` or `num2 = 0`.
>
> Example 1:
>
> ```txt
> Input: num1 = 2, num2 = 3
> Output: 3
> Explanation:
>
> - Operation 1: num1 = 2, num2 = 3. Since num1 < num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.
> - Operation 2: num1 = 2, num2 = 1. Since num1 > num2, we subtract num2 from num1.
> - Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.
>  Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.
>  So the total number of operations required is 3.
> ```
>
> Example 2:
>
> ```txt
> Input: num1 = 10, num2 = 10
> Output: 1
> Explanation:
>
> - Operation 1: num1 = 10, num2 = 10. Since num1 == num2, we subtract num2 from num1 and get num1 = 10 - 10 = 0.
>  Now num1 = 0 and num2 = 10. Since num1 == 0, we are done.
>  So the total number of operations required is 1.
> ```

### 🧩 Approach

1. Initialize a result counter `res` to 0.
2. While both `num1` and `num2` are greater than 0:
   - Add the integer division of `num1` by `num2` to `res`.
   - Update `num1` to be the remainder of `num1` divided by `num2`.
   - Swap `num1` and `num2`.
3. Return the result counter `res`.

### 💡 Solution

```python
class Solution:
    def countOperations(self, num1: int, num2: int) -> int:
        """
        Count the number of operations to reduce either num1 or num2 to zero.

        Args:
            num1 (int): The first integer.
            num2 (int): The second integer.

        Returns:
            int: The number of operations performed.
        """
        res: int = 0

        while num1 and num2:
            res += num1 // num2
            num1 = num1 % num2
            num1, num2 = num2, num1

        return res
```

### 🧮 Complexity Analysis

- Time Complexity: `O(log min(num1, num2))`
- Space Complexity: `O(1)`
