# Linked List

---

## Table of Contents

- [141. Linked List Cycle](#141-linked-list-cycle)

---

## 141. Linked List Cycle

- **LeetCode Link:** [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
- **Difficulty:** Easy
- **Topics:** Linked List, Two Pointers

### 🧠 Problem Statement

> Given head, the head of a linked list, determine if the linked list has a cycle in it.
>
> There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
>
> Return true if there is a cycle in the linked list. Otherwise, return false.
>
> Example 1:
>
> ```txt
> Input: head = [3,2,0,-4], pos = 1
> Output: true
> Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
> ```
>
> Example 2:
>
> ```txt
> Input: head = [1,2], pos = 0
> Output: true
> Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
> ```
>
> Example 3:
>
> ```txt
> Input: head = [1], pos = -1
> Output: false
> Explanation: There is no cycle in the linked list.
> ```

### 🧩 Approach

To determine if a linked list has a cycle, we can use the Floyd's Cycle-Finding Algorithm, also known as the Tortoise and Hare algorithm. This approach uses two pointers that traverse the linked list at different speeds.

1. **Initialization**: We start by creating two pointers, `slow` and `fast`. Both pointers are initialized to the head of the linked list.
2. **Traversal**: We move the `slow` pointer one step at a time (i.e., `slow = slow.next`), while the `fast` pointer moves two steps at a time (i.e., `fast = fast.next.next`).
3. **Cycle Detection**: If there is a cycle in the linked list, the `fast` pointer will eventually meet the `slow` pointer. If the `fast` pointer reaches the end of the list (i.e., `fast` or `fast.next` becomes `None`), then there is no cycle in the list.
4. **Return Result**: If the `slow` pointer meets the `fast` pointer, we return `True`, indicating that there is a cycle. If the `fast` pointer reaches the end of the list, we return `False`.

### 💡 Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        dummy: ListNode = ListNode()
        dummy.next = head
        slow: ListNode = dummy
        fast: ListNode = dummy

        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

            if slow is fast:
                return True

        return False
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`

---
