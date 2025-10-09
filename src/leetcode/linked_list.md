# Linked List

---

## Table of Contents

- [21. Merge Two Sorted Lists](#21-merge-two-sorted-lists)
- [141. Linked List Cycle](#141-linked-list-cycle)

---

## 21. Merge Two Sorted Lists

- **LeetCode Link:** [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- **Difficulty:** Easy
- **Topics:** Linked List, Recursion

### 🧠 Problem Statement

> You are given the heads of two sorted linked lists `list1` and `list2`.
>
> Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
>
> Return the head of the merged linked list.
>
> Example 1:
>
> ```txt
> Input: list1 = [1,2,4], list2 = [1,3,4]
> Output: [1,1,2,3,4,4]
> ```
>
> Example 2:
>
> ```txt
> Input: list1 = [], list2 = []
> Output: []
> ```
>
> Example 3:
>
> ```txt
> Input: list1 = [], list2 = [0]
> Output: [0]
> ```

### 🧩 Approach

To merge two sorted linked lists, we can use a two-pointer technique to traverse both lists and build a new sorted list. Here are the steps:

1. **Initialization**: Create a dummy node to serve as the starting point of the merged list. This helps simplify edge cases. Also, create a pointer `cur` that will point to the current node in the merged list.
2. **Traversal**: Use a while loop to traverse both linked lists until we reach the end of one of them. In each iteration, compare the values of the current nodes of both lists:
   - If the value of the current node in `list1` is less than that in `list2`, append the node from `list1` to the merged list and move the pointer in `list1` to the next node.
   - Otherwise, append the node from `list2` to the merged list and move the pointer in `list2` to the next node.
3. **Appending Remaining Nodes**: After the loop, one of the lists may still have remaining nodes. Since both lists are sorted, we can simply append the remaining nodes to the end of the merged list.
4. **Return Result**: Finally, return the merged list starting from the node next to the dummy node.

### 💡 Solution

```python
from typing import Optional

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        """
        Merge two sorted linked lists into one sorted linked list.

        Args:
            list1 (Optional[ListNode]): The head of the first sorted linked list.
            list2 (Optional[ListNode]): The head of the second sorted linked list.

        Returns:
            Optional[ListNode]: The head of the merged sorted linked list.
        """
        dummy: ListNode = ListNode()
        cur: ListNode = dummy

        while list1 and list2:
            if list1.val < list2.val:
                cur.next = list1
                cur = list1
                list1 = list1.next
            else:
                cur.next = list2
                cur = list2
                list2 = list2.next

        cur.next = list1 if list1 else list2

        return dummy.next
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`

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
from typing import Optional

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        """
        Determine if the linked list has a cycle.

        Args:
            head (Optional[ListNode]): The head of the linked list.

        Returns:
            bool: True if there is a cycle, False otherwise.
        """
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
