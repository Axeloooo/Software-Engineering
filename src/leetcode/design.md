# Design

---

## Table of Contents

- [225. Implement Stack using Queues](#225-implement-stack-using-queues)
- [232. Implement Queue using Stacks](#232-implement-queue-using-stacks)

---

## 225. Implement Stack using Queues

- **LeetCode Link:** [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)
- **Difficulty:** Easy
- **Topic(s):** Design, Queue, Stack
- **Company:** Google

### 🧠 Problem Statement

> Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).
>
> Implement the `MyStack` class:
>
> - `void push(int x)` Pushes element x to the top of the stack.
> - `int pop()` Removes the element on the top of the stack and returns it.
> - `int top()` Returns the element on the top of the stack.
> - `boolean empty()` Returns `true` if the stack is empty, `false` otherwise.
>
> Notes:
>
> - You must use only standard operations of a queue, which means that only `push to back`, `peek/pop from front`, `size` and `is empty` operations are valid.
> - Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
>
> Example 1:
>
> ```txt
> Input
> ["MyStack", "push", "push", "top", "pop", "empty"]
> [[], [1], [2], [], [], []]
>
> Output
> [null, null, null, 2, 2, false]
>
> Explanation
> MyStack myStack = new MyStack();
> myStack.push(1);
> myStack.push(2);
> myStack.top(); // return 2
> myStack.pop(); // return 2
> myStack.empty(); // return False
> ```

### 🧩 Approach

To implement a stack using queues, we can use a single queue to store the elements of the stack. The main idea is to ensure that the most recently added element (the top of the stack) is always at the front of the queue. This way, we can perform `pop` and `top` operations in `O(1)` time. To achieve this, when we push a new element onto the stack, we can first add it to the back of the queue and then rotate the queue so that the new element is at the front.

### 💡 Solution

```python
from collections import deque

class MyStack:
    """
    A stack implementation using a deque as the underlying storage.
    """

    def __init__(self):
        """Initializes an empty stack."""
        self._q: deque[int] = deque()

    def push(self, x: int) -> None:
        """Pushes an element onto the top of the stack.

        Args:
            x (int): The value to be pushed onto the stack.

        Returns:
            None
        """
        self._q.append(x)

    def pop(self) -> int:
        """Removes and returns the top element of the stack.

        Args:
            None

        Returns:
            int: The element removed from the top of the stack.
        """
        for _ in range(len(self._q) - 1):
            self._q.append(self._q.popleft())
        return self._q.popleft()


    def top(self) -> int:
        """Returns the top element of the stack without removing it.

        Args:
            None

        Returns:
            int: The element at the top of the stack.
        """
        return self._q[-1]


    def empty(self) -> bool:
        """Checks whether the stack is empty.

        Args:
            None

        Returns:
            bool: True if the stack is empty, False otherwise.
        """
        return not self._q
```

### 🧮 Complexity Analysis

- Time Complexity:
  - `push`: `O(1)`
  - `pop`: `O(n)`
  - `top`: `O(1)`
  - `empty`: `O(1)`
- Space Complexity: `O(n)`

---

## 232. Implement Queue using Stacks

- **LeetCode Link:** [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)
- **Difficulty:** Easy
- **Topic(s):** Design, Queue, Stack
- **Company:** Microsoft

### 🧠 Problem Statement

> Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).
>
> Implement the `MyQueue` class:
>
> - `void push(int x)` Pushes element x to the back of the queue.
> - `int pop()` Removes the element from the front of the queue and returns it.
> - `int peek()` Returns the element at the front of the queue.
> - `boolean empty()` Returns `true` if the queue is empty, `false` otherwise.
>
> Notes:
>
> You must use only standard operations of a stack, which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.
> Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
>
> Example 1:
>
> ```txt
> Input
> ["MyQueue", "push", "push", "peek", "pop", "empty"]
> [[], [1], [2], [], [], []]
>
> Output
> [null, null, null, 1, 1, false]
>
> Explanation
> MyQueue myQueue = new MyQueue();
> myQueue.push(1); // queue is: [1]
> myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
> myQueue.peek(); // return 1
> myQueue.pop(); // return 1, queue is [2]
> myQueue.empty(); // return false
> ```

### 🧩 Approach

To implement a queue using stacks, we can use two stacks to manage the elements of the queue. The main idea is to use one stack (`s1`) for enqueueing elements and another stack (`s2`) for dequeueing elements. When we need to dequeue an element, if `s2` is empty, we can pop all elements from `s1` and push them onto `s2`, which will reverse the order of the elements and allow us to access the front of the queue. This way, we can perform `push`, `pop`, and `peek` operations efficiently.

### 💡 Solution

```python
class MyQueue:

    def __init__(self):
        """Initializes an empty queue using two stacks."""
        self._s1: list[int] = []
        self._s2: list[int] = []

    def push(self, x: int) -> None:
        """Pushes an element to the back of the queue.

        Args:
            x (int): The value to be pushed onto the queue.

        Returns:
            None
        """
        self._s1.append(x)

    def pop(self) -> int:
        """Removes and returns the front element of the queue.

        Args:
            None

        Returns:
            int: The element removed from the front of the queue.
        """
        if not self._s2:
            while self._s1:
                self._s2.append(self._s1.pop())
        return self._s2.pop()

    def peek(self) -> int:
        """Returns the front element of the queue without removing it.

        Args:
            None

        Returns:
            int: The element at the front of the queue.
        """
        if not self._s2:
            while self._s1:
                self._s2.append(self._s1.pop())
        return self._s2[-1]

    def empty(self) -> bool:
        """Checks whether the queue is empty.

        Args:
            None

        Returns:
            bool: True if the queue is empty, False otherwise.
        """
        return max(len(self._s1), len(self._s2)) == 0
```

### 🧮 Complexity Analysis

- Time Complexity:
  - `push`: `O(1)`
  - `pop`: `O(1)` amortized
  - `peek`: `O(1)` amortized
  - `empty`: `O(1)`
- Space Complexity: `O(n)`

---
