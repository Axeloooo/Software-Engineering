# Binary Tree

---

## Table of Contents

- [104. Maximum Depth of Binary Tree](#104-maximum-depth-of-binary-tree)

---

## 104. Maximum Depth of Binary Tree

- **LeetCode Link:** [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- **Difficulty:** Easy
- **Topic(s):** Binary Tree, Depth-First Search, Breadth-First Search

### 🧠 Problem Statement

> Given the `root` of a binary tree, return its maximum depth.
>
> A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
>
> Example 1:
>
> ```txt
> Input: root = [3,9,20,null,null,15,7]
> Output: 3
> ```
>
> Example 2:
>
> ```txt
> Input: root = [1,null,2]
> Output: 2
> ```

### 🧩 Approach

- DFS (Depth-First Search):
  - Recursively calculate the depth of the left and right subtrees.
  - The maximum depth is `1 + max(depth of left subtree, depth of right subtree)`.

### 💡 Solution

```python
from typing import Optional

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        """
        Calculate the maximum depth of a binary tree.

        Args:
            root (Optional[TreeNode]): The root node of the binary tree.

        Returns:
            int: The maximum depth of the binary tree.
        """
        if not root:
            return 0

        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(h)`

---
