# Matrix

---

## Table of Contents

- [54. Spiral Matrix](#54-spiral-matrix)

---

## 54. Spiral Matrix

- **LeetCode Link:** [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)
- **Difficulty:** Medium
- **Topic(s):** Array, Matrix
- **Company:** Capital One

### 🧠 Problem Statement

> Given an `m x n` `matrix`, return all elements of the `matrix` in spiral order.
>
> Example 1:
>
> ```txt
> Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
> Output: [1,2,3,6,9,8,7,4,5]
> ```
>
> Example 2:
>
> ```txt
> Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
> Output: [1,2,3,4,8,12,11,10,9,5,6,7]
> ```

### 🧩 Approach

- DFS (Depth-First Search):
  - Recursively compare the nodes of both trees.
  - If both nodes are `None`, they are the same.
  - If one node is `None` and the other is not, they are different.
  - If the values of the nodes are different, they are different.
  - Recursively check the left and right subtrees.

### 💡 Solution

```python
from typing import List

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        """
        Return all elements of the matrix in spiral order.

        Args:
            matrix (List[List[int]]): 2D list of integers.

        Returns:
            List[int]: List of integers in spiral order.
        """
        res: List[int] = []

        if not matrix:
            return res

        top, bottom = 0, len(matrix) - 1
        left, right = 0, len(matrix[0]) - 1

        while top <= bottom and left <= right:

            for i in range(left, right + 1):
                res.append(matrix[top][i])
            top += 1

            for i in range(top, bottom + 1):
                res.append(matrix[i][right])
            right -= 1

            if top <= bottom:
                for i in range(right, left - 1, -1):
                    res.append(matrix[bottom][i])
                bottom -= 1

            if left <= right:
                for i in range(bottom, top - 1, -1):
                    res.append(matrix[i][left])
                left += 1

        return res
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n * m)`
- Space Complexity: `O(1)`

---
