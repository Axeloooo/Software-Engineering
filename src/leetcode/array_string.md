# Array / String

## Table of Contents

- [26. Remove Duplicates from Sorted Array](#26-remove-duplicates-from-sorted-array)
- [27. Remove Element](#27-remove-element)
- [88. Merge Sorted Array](#88-merge-sorted-array)
- [169. Majority Element](#169-majority-element)

---

## 26. Remove Duplicates from Sorted Array

- **LeetCode Link:** [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- **Difficulty:** Easy
- **Topic(s):** Array, Two Pointers

### 🧠 Problem Statement

> Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.
>
> Consider the number of unique elements of `nums` to be `k`, to get accepted, you need to do the following things:
>
> - Change the array `nums` such that the first k elements of `nums` contain the unique elements in the order they were present in `nums` initially. The remaining elements of `nums` are not important as well as the size of `nums`.
> - Return `k`.

### 🧩 Approach

Use the **two-pointer technique**:

- `i`: slow pointer, tracks the position of the last unique element.
- `j`: fast pointer, scans the array.

Steps:

1. Initialize `i = 0`.
2. Iterate `j` from 1 to end of array.
3. If `nums[j] != nums[i]`, it’s a new unique element:
   - Increment `i`
   - Copy `nums[j]` to `nums[i]`
4. After the loop, the first `i + 1` elements are the unique values.

### 💡 Solution

```python
def removeDuplicates(self, nums: List[int]) -> int:
    """
    Remove duplicates from a sorted array in-place and return the new length.

    Args:
        nums (List[int]): The input sorted array.

    Returns:
        int: The new length of the array after removing duplicates.
    """
    i = 0

    for j in range(1, len(nums)):
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]

    return i + 1
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`

---

## 27. Remove Element

- **LeetCode Link:** [Remove Element](https://leetcode.com/problems/remove-element/)
- **Difficulty:** Easy
- **Topic(s):** Array, Two Pointers

### 🧠 Problem Statement

> Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` that are not equal to `val`.
>
> Consider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:
>
> - Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of nums.
> - Return `k`.

### 🧩 Approach

Use the **two-pointer technique**:

- One pointer (`i`) scans every element.
- Another pointer (`k`) keeps track of the position where the next valid (non-`val`) element should be placed.

Steps:

1. Iterate through the array.
2. If the current element is not equal to `val`, place it at index `k` and increment `k`.
3. After the loop, `k` will represent the new length of the array with `val` removed.

### 💡 Solution

```python
def removeElement(self, nums: List[int], val: int) -> int:
    """
    Remove all occurrences of `val` in `nums` in-place and return the new length.

    Args:
        nums (List[int]): The input array.
        val (int): The value to be removed.

    Returns:
        int: The new length of the array after removal.
    """
    k: int = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[k] = nums[i]
            k += 1
    return k
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`

---

## 88. Merge Sorted Array

- **LeetCode Link:** [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
- **Difficulty:** Easy
- **Topic(s):** Array, Two Pointers

### 🧠 Problem Statement

> You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.
>
> Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.
>
> The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

### 🧩 Approach

Use three pointers:

- `midx` points to the last valid element in `nums1` (`m - 1`)
- `nidx` points to the last element in `nums2` (`n - 1`)
- `right` points to the last index in `nums1` (`m + n - 1`)

Compare elements from the back and place the larger one at index `right`. Decrement pointers accordingly.

Repeat until `nidx` reaches 0 (no need to worry about `midx`, since the rest are already in place).

### 💡 Solution

```python
def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    """
    Merge two sorted arrays `nums1` and `nums2` into `nums1` in-place.

    Args:
        nums1 (List[int]): The first sorted array with enough space to hold the elements of `nums2`.
        m (int): The number of elements in `nums1`.
        nums2 (List[int]): The second sorted array.
        n (int): The number of elements in `nums2`.

    Returns:
        None: The result is stored in `nums1`.
    """
    midx = m - 1
    nidx = n - 1
    right = m + n - 1

    while nidx >= 0:
        if midx >= 0 and nums1[midx] > nums2[nidx]:
            nums1[right] = nums1[midx]
            midx -= 1
        else:
            nums1[right] = nums2[nidx]
            nidx -= 1

        right -= 1
```

### 🧮 Complexity Analysis

- Time Complexity: `O(m + n)`
- Space Complexity: `O(1)`

---

## 169. Majority Element

- **LeetCode Link:** [Majority Element](https://leetcode.com/problems/majority-element/)
- **Difficulty:** Easy
- **Topic(s):** Array, Hash Table, Divide and Conquer, Counting

### 🧠 Problem Statement

> Given an array `nums` of size `n`, return the majority element.
>
> The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

### 🧩 Approach

Boyer-Moore Voting Algorithm:

1. Initialize a `count = 0` and `candidate = None`.
2. Iterate through the array:
   - If `count == 0`, set `candidate = current element`
   - If `current element == candidate`, increment `count`
   - Else, decrement `count`
3. At the end, `candidate` is the majority element.

This works because the majority element appears more than all others combined.

### 💡 Solution

```python
def majorityElement(self, nums: List[int]) -> int:
    """
    Find the majority element in an array using Boyer-Moore Voting Algorithm.

    Args:
        nums (List[int]): The input array.

    Returns:
        int: The majority element.
    """
    count = 0
    candidate = 0

    for num in nums:
        if count == 0:
            candidate = num

        if num == candidate:
            count += 1
        else:
            count -= 1

    return candidate
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`
