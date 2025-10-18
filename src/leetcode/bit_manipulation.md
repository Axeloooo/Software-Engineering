# Bit Manipulation

---

## Table of Contents

- [67. Add Binary](./67.add_binary.md)

---

## 67. Add Binary

- **LeetCode Link:** [Add Binary](https://leetcode.com/problems/add-binary/)
- **Difficulty:** Easy
- **Topic(s):** String Manipulation, Bit Manipulation
- **Company:** Google

### 🧠 Problem Statement

> Given two binary strings `a` and `b`, return their sum as a binary string.
>
> Example 1:
>
> ```txt
> Input: a = "11", b = "1"
> Output: "100"
> ```
>
> Example 2:
>
> ```txt
> Input: a = "1010", b = "1011"
> Output: "10101"
> ```

### 🧩 Approach

To add two binary strings using bit manipulation, we can follow these steps:

1. Convert the binary strings to integers.
2. Use a while loop to perform the addition using bitwise operations until there are no carries left.
   - Calculate the sum without carry using the XOR operation.
   - Calculate the carry using the AND operation followed by a left shift.
   - Update the values of `a` and `b` with the new sum and carry.
   - Repeat until `b` becomes zero.
3. Convert the final result back to a binary string and return it.

```python
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        """
        Adds two binary strings using bit manipulation.

        Args:
            a (str): First binary string.
            b (str): Second binary string.

        Returns:
            str: The sum of the two binary strings as a binary string.
        """
        a, b = int(a, 2), int(b, 2)

        while b:
            without_carry: int = a ^ b
            carry: int = (a & b) << 1
            a, b = without_carry, carry

        return bin(a)[2:]
```

### 🧮 Complexity Analysis

- Time Complexity: `O(a + b)`
- Space Complexity: `O(1)`

---
