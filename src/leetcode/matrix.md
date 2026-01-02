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

- Use four boundary pointers to track the current "layer" of the matrix:
  - `top` and `bottom` for the first and last row that are not yet processed.
  - `left` and `right` for the first and last column that are not yet processed.
- While `top <= bottom` and `left <= right`, traverse in four directions:
  - Left → Right across the top row (`top`, from `left` to `right`), then increment `top`.
  - Top → Bottom down the right column (`right`, from `top` to `bottom`), then decrement `right`.
  - If `top <= bottom`, traverse Right → Left across the bottom row (`bottom`, from `right` to `left`), then decrement `bottom`.
  - If `left <= right`, traverse Bottom → Top up the left column (`left`, from `bottom` to `top`), then increment `left`.
- Repeat this process, shrinking the boundaries inward after each layer, until all elements have been added to the result.

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
