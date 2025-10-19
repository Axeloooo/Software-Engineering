# Bit Manipulation

---

## Table of Contents

- [67. Add Binary](#67-add-binary)
- [190. Reverse Bits](#190-reverse-bits)

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

### 💡 Solution

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

# 190. Reverse Bits

- **LeetCode Link:** [Reverse Bits](https://leetcode.com/problems/reverse-bits/)
- **Difficulty:** Easy
- **Topic(s):** Bit Manipulation
- **Company:** Amazon

### 🧠 Problem Statement

> Reverse bits of a given 32 bits signed integer.
>
> Example 1:
>
> ```txt
> Input: n = 43261596
>
> Output: 964176192
> ```
>
> Explanation:
>
> | Integer   | Binary                           |
> | --------- | -------------------------------- |
> | 43261596  | 00000010100101000001111010011100 |
> | 964176192 | 00111001011110000010100101000000 |
>
> Example 2:
>
> ```txt
> Input: n = 2147483644
>
> Output: 1073741822
> ```
>
> Explanation:
>
> | Integer    | Binary                           |
> | ---------- | -------------------------------- |
> | 2147483644 | 01111111111111111111111111111100 |
> | 1073741822 | 00111111111111111111111111111110 |

### 🧩 Approach

To reverse the bits of a 32-bit unsigned integer, we can use the following approach:

1. Initialize a result variable to 0.
2. Iterate through each bit position from 0 to 31.
3. For each bit position, extract the bit from the original number using a right shift and bitwise AND operation.
4. Set the corresponding bit in the result variable using a left shift and bitwise OR operation.
5. Return the result variable.

### 💡 Solution

```python
class Solution:
    def reverseBits(self, n: int) -> int:
        """
        Reverses the bits of a given 32-bit unsigned integer.

        Args:
            n (int): A 32-bit unsigned integer.

        Returns:
            int: The integer resulting from reversing the bits of n.
        """
        res: int = 0

        for i in range(32):
            bit: int = (n >> i) & 1
            res = res | (bit << (31 - i))

        return res
```

### 🧮 Complexity Analysis

- Time Complexity: `O(1)`
- Space Complexity: `O(1)`

---
