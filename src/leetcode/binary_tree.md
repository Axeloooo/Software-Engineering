# Binary Tree

---

## Table of Contents

- [100. Same Tree](#100-same-tree)
- [101. Symmetric Tree](#101-symmetric-tree)
- [104. Maximum Depth of Binary Tree](#104-maximum-depth-of-binary-tree)
- [112. Path Sum](#112-path-sum)
- [222. Count Complete Tree Nodes](#222-count-complete-tree-nodes)
- [226. Invert Binary Tree](#226-invert-binary-tree)

---

## 100. Same Tree

- **LeetCode Link:** [Same Tree](https://leetcode.com/problems/same-tree/)
- **Difficulty:** Easy
- **Topic(s):** Binary Tree, Depth-First Search, Breadth-First Search
- **Company:** Apple

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
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        """
        Determine if two binary trees are the same.

        Args:
            p (Optional[TreeNode]): The root node of the first binary tree.
            q (Optional[TreeNode]): The root node of the second binary tree.

        Returns:
            bool: True if the two binary trees are the same, False otherwise.
        """
        def balanced(p: Optional[TreeNode], q: Optional[TreeNode]):
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

            return balanced(p.left, q.left) and balanced(p.right, q.right)

        return balanced(p, q)
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n + m)`
- Space Complexity: `O(h_p + h_q)`

---

## 101. Symmetric Tree

- **LeetCode Link:** [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)
- **Difficulty:** Easy
- **Topic(s):** Binary Tree, Depth-First Search, Breadth-First Search
- **Company:** Apple

### 🧠 Problem Statement

> Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
>
> Example 1:
>
> ```txt
> Input: root = [1,2,2,3,4,4,3]
> Output: true
> ```
>
> Example 2:
>
> ```txt
>
> Input: root = [1,2,2,null,3,null,3]
> Output: false
> ```

### 🧩 Approach

- DFS (Depth-First Search):
  - Recursively compare the left and right subtrees.
  - If both nodes are `None`, they are symmetric.
  - If one node is `None` and the other is not, they are not symmetric.
  - If the values of the nodes are different, they are not symmetric.
  - Recursively check the left subtree of one tree with the right subtree of the other tree and vice versa.

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
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        """
        Determine if a binary tree is symmetric.

        Args:
            root (Optional[TreeNode]): The root node of the binary tree.

        Returns:
            bool: True if the binary tree is symmetric, False otherwise.
        """
        def same(root1: Optional[TreeNode], root2: Optional[TreeNode]):
            """
            Helper function to determine if a binary tree is symmetric.

            Args:
                root1 (Optional[TreeNode]): The root node of the first subtree.
                root2 (Optional[TreeNode]): The root node of the second subtree.

            Returns:
                bool: True if the binary tree is symmetric, False otherwise.
            """
            if not root1 and not root2:
                return True

            if not root1 or not root2:
                return False

            if root1.val != root2.val:
                return False

            return same(root1.left, root2.right) and same(root1.right, root2.left)

        return same(root, root)
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n + m)`
- Space Complexity: `O(h_p + h_q)`

---

## 104. Maximum Depth of Binary Tree

- **LeetCode Link:** [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- **Difficulty:** Easy
- **Topic(s):** Binary Tree, Depth-First Search, Breadth-First Search
- **Company:** Microsoft

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

## 112. Path Sum

- **LeetCode Link:** [Path Sum](https://leetcode.com/problems/path-sum/)
- **Difficulty:** Easy
- **Topic(s):** Binary Tree, Depth-First Search, Breadth-First Search
- **Company:** Google

### 🧠 Problem Statement

> Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.
>
> A leaf is a node with no children.
>
> Example 1:
>
> ```txt
> Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
> Output: true
> Explanation: The root-to-leaf path with the target sum is shown.
> ```
>
> Example 2:
>
> ```txt
> Input: root = [1,2,3], targetSum = 5
> Output: false
> Explanation: There are two root-to-leaf paths in the tree:
> (1 --> 2): The sum is 3.
> (1 --> 3): The sum is 4.
> There is no root-to-leaf path with sum = 5.
> ```
>
> Example 3:
>
> ```txt
> Input: root = [], targetSum = 0
> Output: false
> Explanation: Since the tree is empty, there are no root-to-leaf paths.
> ```

### 🧩 Approach

- DFS (Depth-First Search):
  - Recursively traverse the tree, keeping track of the current sum.
  - If a leaf node is reached, check if the current sum equals the target sum.
  - Return `true` if a valid path is found, otherwise return `false`.

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
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        """
        Determine if the binary tree has a root-to-leaf path with the given sum.

        Args:
            root (Optional[TreeNode]): The root node of the binary tree.
            targetSum (int): The target sum to check for.

        Returns:
            bool: True if the binary tree has a root-to-leaf path with the given sum, False otherwise.
        """
        def hasSum(root: Optional[TreeNode], cur_sum: int) -> bool:
            """
            Helper function to determine if the binary tree has a root-to-leaf path with the given sum.

            Args:
                root (Optional[TreeNode]): The current node of the binary tree.
                cur_sum (int): The current sum of the path.

            Returns:
                bool: True if the binary tree has a root-to-leaf path with the given sum, False otherwise.
            """
            if not root:
                return False

            cur_sum += root.val

            if not root.left and not root.right:
                return cur_sum == targetSum

            return hasSum(root.left, cur_sum) or hasSum(root.right, cur_sum)

        return hasSum(root, 0)
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(h)`

---

## 222. Count Complete Tree Nodes

- **LeetCode Link:** [Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/)
- **Difficulty:** Medium
- **Topic(s):** Binary Tree, Depth-First Search, Breadth-First Search
- **Company:** Amazon

### 🧠 Problem Statement

222. Count Complete Tree Nodes

> Given the `root` of a complete binary tree, return the number of the nodes in the tree.
>
> According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between `1` and `2^h` nodes inclusive at the last level `h`.
>
> Design an algorithm that runs in less than `O(n)` time complexity.
>
> Example 1:
>
> ```txt
> Input: root = [1,2,3,4,5,6]
> Output: 6
> ```
>
> Example 2:
>
> ```txt
> Input: root = []
> Output: 0
> ```
>
> Example 3:
>
> ```txt
> Input: root = [1]
> Output: 1
> ```

### 🧩 Approach

- DFS (Depth-First Search):
  - Recursively count the nodes in the left and right subtrees.
  - The total number of nodes is `1 + count of left subtree + count of right subtree`.

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
    def countNodes(self, root: Optional[TreeNode]) -> int:
        """
        Count the number of nodes in a complete binary tree.

        Args:
            root (Optional[TreeNode]): The root node of the complete binary tree.

        Returns:
            int: The number of nodes in the complete binary tree.
        """
        if not root:
            return 0

        return 1 + self.countNodes(root.left) + self.countNodes(root.right)
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(h)`

---

## 226. Invert Binary Tree

- **LeetCode Link:** [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
- **Difficulty:** Easy
- **Topic(s):** Binary Tree, Depth-First Search, Breadth-First Search
- **Company:** Microsoft

### 🧠 Problem Statement

> Given the `root` of a binary tree, invert the tree, and return its root.
>
> Example 1:
>
> ```txt
> Input: root = [4,2,7,1,3,6,9]
> Output: [4,7,2,9,6,3,1]
> ```
>
> Example 2:
>
> ```txt
> Input: root = [2,1,3]
> Output: [2,3,1]
> ```
>
> Example 3:
>
> ```txt
> Input: root = []
> Output: []
> ```

### 🧩 Approach

- DFS (Depth-First Search):
  - Recursively swap the left and right children of each node.
  - Return the root of the inverted tree.

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
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        """
        Invert a binary tree.

        Args:
            root (Optional[TreeNode]): The root node of the binary tree.

        Returns:
            Optional[TreeNode]: The root node of the inverted binary tree.
        """
        if not root:
            return None

        root.left, root.right = root.right, root.left

        self.invertTree(root.left)
        self.invertTree(root.right)

        return root
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(h)`
