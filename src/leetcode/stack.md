# Stack

---

## Table of Contents

- [20. Valid Parentheses](#20-valid-parentheses)

---

## 20. Valid Parentheses

- **LeetCode Link:** [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
- **Difficulty:** Easy
- **Topics:** String, Stack

### 🧠 Problem Statement

> Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
>
> An input string is valid if:
>
> 1.  Open brackets must be closed by the same type of brackets.
> 2.  Open brackets must be closed in the correct order.
> 3.  Every close bracket has a corresponding open bracket of the same type.
>
> Example 1:
>
> ```txt
> Input: s = "()"
>
> Output: true
> ```
>
> Example 2:
>
> ```txt
> Input: s = "()[]{}"
>
> Output: true
> ```
>
> Example 3:
>
> ```txt
> Input: s = "(]"
>
> Output: false
> ```
>
> Example 4:
>
> ```txt
> Input: s = "([])"
>
> Output: true
> ```
>
> Example 5:
>
> ```txt
> Input: s = "([)]"
>
> Output: false
> ```

### 🧩 Approach

To solve the problem of validating parentheses, we can use a stack data structure. The idea is to iterate through each character in the string and perform the following steps:

1. **Push Open Brackets:** If the character is an opening bracket (`'('`, `'{'`, `'['`), we push it onto the stack.
2. **Check Close Brackets:** If the character is a closing bracket (`')'`, `'}'`, `']'`), we check if the stack is empty. If it is empty, it means there is no corresponding opening bracket, and we return `False`. If the stack is not empty, we pop the top element from the stack and check if it matches the corresponding opening bracket. If it does not match, we return `False`.
3. **Final Check:** After processing all characters, if the stack is empty, it means all opening brackets had matching closing brackets in the correct order, and we return `True`. If the stack is not empty, we return `False`.

### 💡 Solution

```python
from typing import Dict

class Solution:
    def isValid(self, s: str) -> bool:
        """
        Determine if the input string of parentheses is valid.

        Args:
            s (str): The input string containing parentheses.

        Returns:
            bool: True if the string is valid, False otherwise.
        """
        hashmap: Dict[str, str] = {")": "(", "]": "[", "}": "{"}
        stack: List[str] = []

        for c in s:
            if c not in hashmap:
                stack.append(c)
            else:
                if not stack:
                    return False
                else:
                    popped = stack.pop()
                    if popped != hashmap[c]:
                        return False

        return not stack
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(n)`

---
