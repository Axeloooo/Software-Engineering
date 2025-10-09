# Binary Tree

---

## Table of Contents

- [100. Same Tree](#100-same-tree)
- [104. Maximum Depth of Binary Tree](#104-maximum-depth-of-binary-tree)

---

## 100. Same Tree

- **LeetCode Link:** [Same Tree](https://leetcode.com/problems/same-tree/)
- **Difficulty:** Easy
- **Topic(s):** Binary Tree, Depth-First Search, Breadth-First Search

### 🧠 Problem Statement

> Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.
>
> Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
>
> Example 1:
>
> ```txt
> Input: p = [1,2,3], q = [1,2,3]
> Output: true
> ```
>
> Example 2:
>
> ```txt
> Input: p = [1,2], q = [1,null,2]
> Output: false
> ```
>
> Example 3:
>
> ```txt
> Input: p = [1,2,1], q = [1,1,2]
> Output: false
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
from typing import Optional

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def balanced(self, p: Optional[TreeNode], q: Optional[TreeNode]):
        """
        Helper function to determine if two binary trees are the same.
        Args:
            p (Optional[TreeNode]): The root node of the first binary tree.
            q (Optional[TreeNode]): The root node of the second binary tree.
        Returns:
            bool: True if the two binary trees are the same, False otherwise.
        """
        if not p and not q:
            return True

        if (p and not q) or (q and not p):
            return False

        if p.val != q.val:
            return False

        return self.balanced(p.left, q.left) and self.balanced(p.right, q.right)

    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        """
        Determine if two binary trees are the same.

        Args:
            p (Optional[TreeNode]): The root node of the first binary tree.
            q (Optional[TreeNode]): The root node of the second binary tree.

        Returns:
            bool: True if the two binary trees are the same, False otherwise.
        """
        return self.balanced(p, q)
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n + m)`
- Space Complexity: `O(h_p + h_q)`

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

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

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
