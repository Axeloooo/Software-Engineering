# Divide and Conquer

---

## Table of Contents

- [108. Convert Sorted Array to Binary Search Tree](#108-convert-sorted-array-to-binary-search-tree)

---

## 108. Convert Sorted Array to Binary Search Tree

- **LeetCode Link:** [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)
- **Difficulty:** Easy
- **Topic(s):** Divide and Conquer, Tree, Binary Search Tree, Binary Tree
- **Company:** Meta

### 🧠 Problem Statement

> Given an integer array `nums` where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
>
> Example 1:
>
> ```txt
> Input: nums = [-10,-3,0,5,9]
> Output: [0,-3,9,-10,null,5]
> Explanation: [0,-10,5,null,-3,null,9] is also accepted:
> ```
>
> Example 2:
>
> ```txt
> Input: nums = [1,3]
> Output: [3,1]
> Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
> ```

### 🧩 Approach

1. **Understanding Height-Balanced BST**: A height-balanced binary search tree (BST) is defined as a binary tree in which the depth of the two subtrees of every node never differs by more than one. This ensures that the tree remains balanced, leading to efficient operations.
2. **Choosing the Root**: To maintain balance, we can choose the middle element of the sorted array as the root of the BST. This divides the array into two halves, which will form the left and right subtrees.
3. **Recursive Construction**: We can recursively apply the same logic to the left and right halves of the array to construct the left and right subtrees. The base case for the recursion will be when the left index exceeds the right index, at which point we return `None`.
4. **Implementation**: We will implement a helper function that takes the left and right indices of the current subarray and constructs the BST recursively.

### 💡 Solution

```python
from typing import Optional, List

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        """
        Convert a sorted array to a height-balanced binary search tree.

        Args:
            nums (List[int]): A list of integers sorted in ascending order.

        Returns:
            Optional[TreeNode]: The root of the height-balanced binary search tree.
        """
        def helper(l: int, r: int):
            """
            Recursively build the BST from the sorted array.

            Args:
                l (int): Left index of the current subarray.
                r (int): Right index of the current subarray.

            Returns:
                Optional[TreeNode]: The root of the subtree.
            """
            if l > r:
                return None

            m: int = (l + r) // 2
            root: TreeNode = TreeNode(nums[m])
            root.left = helper(l, m - 1)
            root.right = helper(m + 1, r)
            return root

        return helper(0, len(nums) - 1)
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(h)`

---
