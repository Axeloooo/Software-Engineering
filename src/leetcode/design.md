# Design

---

## Table of Contents

- [225. Implement Stack using Queues](#225-implement-stack-using-queues)
- [232. Implement Queue using Stacks](#232-implement-queue-using-stacks)
- [303. Range Sum Query - Immutable](#303-range-sum-query---immutable)
- [703. Kth Largest Element in a Stream](#703-kth-largest-element-in-a-stream)

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

## 303. Range Sum Query - Immutable

- **LeetCode Link:** [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)
- **Difficulty:** Easy
- **Topic(s):** Design, Queue, Stack
- **Company:** Amazon

### 🧠 Problem Statement

> Given an integer array `nums`, handle multiple queries of the following type:
>
> Calculate the sum of the elements of `nums` between indices `left` and `right` inclusive where `left <= right`.
>
> Implement the `NumArray` class:
>
> - `NumArray(int[] nums)` Initializes the object with the integer array `nums`.
> - `int sumRange(int left, int right)` Returns the sum of the elements of `nums` between indices `left` and `right` inclusive (i.e. `nums[left] + nums[left + 1] + ... + nums[right]`).
>
> Example 1:
>
> ```txt
> Input
> ["NumArray", "sumRange", "sumRange", "sumRange"]
> [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
>
> Output
> [null, 1, -1, -3]
>
> Explanation
> NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
> numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
> numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
> numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
> ```

### 🧩 Approach

To efficiently calculate the sum of elements in a given range, we can use a prefix sum array. The prefix sum array allows us to compute the sum of any subarray in constant time after an initial preprocessing step. The idea is to create a prefix sum array where each element at index `i` contains the sum of all elements from the start of the original array up to index `i`. Then, to calculate the sum of elements between indices `left` and `right`, we can simply subtract the prefix sum at `left - 1` from the prefix sum at `right`.

### 💡 Solution

```python
class NumArray:

    def __init__(self, nums: List[int]):
        """Initializes the NumArray object with the given integer array.

        Args:
            nums (List[int]): The input integer array.

        Returns:
            None
        """
        cur: int = 0
        for n in nums:
            cur += n
            self._prefix.append(cur)

    def sumRange(self, left: int, right: int) -> int:
        """Returns the sum of the elements of nums between indices left and right inclusive.

        Args:
            left (int): The starting index of the range.
            right (int): The ending index of the range.

        Returns:
            int: The sum of the elements in the specified range.
        """
        rightSum: int = self._prefix[right]
        leftSum: int = self._prefix[left - 1] if left > 0 else 0
        return rightSum - leftSum
```

### 🧮 Complexity Analysis

- Time Complexity:
  - `__init__`: `O(n)` for preprocessing the prefix sum array.
  - `sumRange`: `O(1)` for each query after preprocessing.
- Space Complexity: `O(n)`

---

## 703. Kth Largest Element in a Stream

- **LeetCode Link:** [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)
- **Difficulty:** Easy
- **Topic(s):** Design, Heap, Priority Queue
- **Company:** Amazon

### 🧠 Problem Statement

> You are part of a university admissions office and need to keep track of the `kth` highest test score from applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.
>
> You are tasked to implement a class which, for a given integer `k`, maintains a stream of test scores and continuously returns the `k`th highest test score after a new score has been submitted. More specifically, we are looking for the `k`th highest score in the sorted list of all scores.
>
> Implement the `KthLargest` class:
>
> - `KthLargest(int k, int[] nums)` Initializes the object with the integer `k` and the stream of test scores `nums`.
> - `int add(int val)` Adds a new test score `val` to the stream and returns the element representing the `kth` largest element in the pool of test scores so far.
>
> Example 1:
>
> ```txt
> Input:
> ["KthLargest", "add", "add", "add", "add", "add"]
> [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
>
> Output: [null, 4, 5, 5, 8, 8]
>
> Explanation:
>
> KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
> kthLargest.add(3); // return 4
> kthLargest.add(5); // return 5
> kthLargest.add(10); // return 5
> kthLargest.add(9); // return 8
> kthLargest.add(4); // return 8
> ```
>
> Example 2:
>
> ```txt
> Input:
> ["KthLargest", "add", "add", "add", "add"]
> [[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]
>
> Output: [null, 7, 7, 7, 8]
>
> Explanation:
>
> KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
> kthLargest.add(2); // return 7
> kthLargest.add(10); // return 7
> kthLargest.add(9); // return 7
> kthLargest.add(9); // return 8
> ```

### 🧩 Approach

To maintain the `k`th largest element in a stream of test scores, we can use a min-heap (priority queue) to store the top `k` largest elements. The min-heap allows us to efficiently keep track of the smallest element among the top `k` elements, which will be the `k`th largest element in the stream. When a new score is added, we can compare it with the smallest element in the heap. If the new score is larger than the smallest element, we can remove the smallest element and add the new score to the heap. This way, we ensure that the heap always contains the `k` largest elements from the stream.

### 💡 Solution

```python
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        """Initializes the KthLargest object with the given integer k and the stream of test scores nums.

        Args:
            k (int): The integer k representing the rank of the largest element to maintain.
            nums (List[int]): The initial stream of test scores.

        Returns:
            None
        """
        self._minHeap: list[int] = nums
        self._k: int = k
        heapq.heapify(self._minHeap)
        while len(self._minHeap) > k:
            heapq.heappop(self._minHeap)

    def add(self, val: int) -> int:
        """Adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far.

        Args:
            val (int): The new test score to be added to the stream.

        Returns:
            int: The kth largest element in the stream after adding the new score.
        """
        heapq.heappush(self._minHeap, val)
        if len(self._minHeap) > self._k:
            heapq.heappop(self._minHeap)
        return self._minHeap[0]
```

### 🧮 Complexity Analysis

- Time Complexity:
  - `__init__`: `O(n log n)` due to heapifying the initial list and maintaining the heap size.
  - `add`: `O(log n)` for adding an element to the heap and maintaining its size.
- Space Complexity: `O(n)` for storing the k largest elements in the heap.

---
