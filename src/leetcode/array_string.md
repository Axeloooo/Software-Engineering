# Array / String

---

## Table of Contents

- [13. Roman to Integer](#13-roman-to-integer)
- [14. Longest Common Prefix](#14-longest-common-prefix)
- [26. Remove Duplicates from Sorted Array](#26-remove-duplicates-from-sorted-array)
- [27. Remove Element](#27-remove-element)
- [28. Find the Index of the First Occurrence in a String](#28-find-the-index-of-the-first-occurrence-in-a-string)
- [58. Length of Last Word](#58-length-of-last-word)
- [88. Merge Sorted Array](#88-merge-sorted-array)
- [121. Best Time to Buy and Sell Stock](#121-best-time-to-buy-and-sell-stock)
- [169. Majority Element](#169-majority-element)

---

## 13. Roman to Integer

- **LeetCode Link:** [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)
- **Difficulty:** Easy
- **Topic(s):** Hash Table, String, Math

### 🧠 Problem Statement

> Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.
>
> ```txt
> Symbol Value
> I 1
> V 5
> X 10
> L 50
> C 100
> D 500
> M 1000
> ```
>
> For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.
>
> Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:
>
> - `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
> - `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
> - `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.
>
> Given a roman numeral, convert it to an integer.
>
> Example 1:
>
> ```txt
> Input: s = "III"
> Output: 3
> Explanation: III = 3.
> ```
>
> Example 2:
>
> ```txt
> Input: s = "LVIII"
> Output: 58
> Explanation: L = 50, V= 5, III = 3.
> ```
>
> Example 3:
>
> ```txt
> Input: s = "MCMXCIV"
> Output: 1994
> Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
> ```

### 🧩 Approach

1. Create a mapping of Roman numeral symbols to their integer values.
2. Initialize a result variable to `0`.
3. Iterate through the string:
   - If the current symbol is less than the next symbol, subtract its value from the result.
   - Otherwise, add its value to the result.
4. Return the result.

### 💡 Solution

```python
from typing import Dict

class Solution:
    def romanToInt(self, s: str) -> int:
        """
        Convert a Roman numeral to an integer.

        Args:
            s (str): The Roman numeral string.

        Returns:
            int: The integer representation of the Roman numeral.
        """
        romans: Dict[str, int] = {
                "I": 1,
                "V": 5,
                "X": 10,
                "L": 50,
                "C": 100,
                "D": 500,
                "M": 1000
        }
        res: int = 0
        for i in range(len(s)):
            if i + 1 < len(s) and romans[s[i]] < romans[s[i + 1]]:
                res -= romans[s[i]]
            else:
                res += romans[s[i]]
        return res
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`

---

## 14. Longest Common Prefix

- **LeetCode Link:** [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)
- **Difficulty:** Easy
- **Topic(s):** String, Trie

### 🧠 Problem Statement

> Write a function to find the longest common prefix string amongst an array of strings.
>
> If there is no common prefix, return an empty string `""`.
>
> Example 1:
>
> ```txt
> Input: strs = ["flower","flow","flight"]
> Output: "fl"
> ```
>
> Example 2:
>
> ```txt
> Input: strs = ["dog","racecar","car"]
> Output: ""
> Explanation: There is no common prefix among the input strings.
> ```

### 🧩 Approach

1. Initialize the result as an empty string.
2. Iterate through the characters of the first string.
3. For each character, check if it matches the corresponding character in all other strings.
4. If a mismatch is found or if the end of any string is reached, return the result.
5. If all characters match, append the character to the result.
6. Return the result after checking all characters of the first string.

### 💡 Solution

```python
from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        """
        Find the longest common prefix among an array of strings.

        Args:
            strs (List[str]): The list of strings.

        Returns:
            str: The longest common prefix.
        """
        res: str = ""
        for i in range(len(strs[0])):
            for s in strs:
                if i == len(s) or s[i] != strs[0][i]:
                    return res
            res += strs[0][i]
        return res
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n * m)`
- Space Complexity: `O(1)`

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
>
> Example 1:
>
> ```txt
> Input: nums = [1,1,2]
> Output: 2, nums = [1,2,_]
> Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
> It does not matter what you leave beyond the returned k (hence they are underscores).
> ```
>
> Example 2:
>
> ```txt
> Input: nums = [0,0,1,1,1,2,2,3,3,4]
> Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
> Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
> It does not matter what you leave beyond the returned k (hence they are underscores).
> ```

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
from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        """
        Remove duplicates from a sorted array in-place and return the new length.

        Args:
            nums (List[int]): The input sorted array.

        Returns:
            int: The new length of the array after removing duplicates.
        """
        i: int = 0

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
>
> Example 1:
>
> ```txt
> Input: nums = [3,2,2,3], val = 3
> Output: 2, nums = [2,2,_,_]
> Explanation: Your function should return k = 2, with the first two elements of nums being 2.
> It does not matter what you leave beyond the returned k (hence they are underscores).
> ```
>
> Example 2:
>
> ```txt
> Input: nums = [0,1,2,2,3,0,4,2], val = 2
> Output: 5, nums = [0,1,4,0,3,_,_,_]
> Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
> Note that the five elements can be returned in any order.
> It does not matter what you leave beyond the returned k (hence they are underscores).
> ```

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
from typing import List

class Solution:
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

## 28. Find the Index of the First Occurrence in a String

- **LeetCode Link:** [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- **Difficulty:** Easy
- **Topic(s):** Two Pointers, String, String Matching

### 🧠 Problem Statement

> Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.
>
> Example 1:
>
> ```txt
> Input: haystack = "sadbutsad", needle = "sad"
> Output: 0
> Explanation: "sad" occurs at index 0 and 6.
> The first occurrence is at index 0, so we return 0.
> ```
>
> Example 2:
>
> ```txt
> Input: haystack = "leetcode", needle = "leeto"
> Output: -1
> Explanation: "leeto" did not occur in "leetcode", so we return -1.
> ```

### 🧩 Approach

Use a simple **sliding window** approach:

1. Iterate through `haystack` with a window of size equal to the length of `needle`.
2. For each position, check if the substring matches `needle`.
3. If a match is found, return the starting index.
4. If no match is found after checking all possible positions, return `-1`.

### 💡 Solution

```python
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        """
        Find the index of the first occurrence of `needle` in `haystack`.

        Args:
            haystack (str): The string to search in.
            needle (str): The substring to search for.

        Returns:
            int: The index of the first occurrence of `needle` in `haystack`, or -1 if not found.
        """
        for i in range(len(haystack) + 1 - len(needle)):
            if haystack[i: i + len(needle)] == needle:
                return i
        return -1
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n * m)`
- Space Complexity: `O(1)`

---

## 58. Length of Last Word

- **LeetCode Link:** [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)
- **Difficulty:** Easy
- **Topic(s):** String, String Manipulation

### 🧠 Problem Statement

> Given a string `s` consisting of words and spaces, return the length of the last word in the string.
>
> A word is a maximal substring consisting of non-space characters only.
>
> Example 1:
>
> ```txt
> Input: s = "Hello World"
> Output: 5
> Explanation: The last word is "World" with length 5.
> ```
>
> Example 2:
>
> ```txt
> Input: s = "   fly me   to   the moon  "
> Output: 4
> Explanation: The last word is "moon" with length 4.
> ```
>
> Example 3:
>
> ```txt
> Input: s = "luffy is still joyboy"
> Output: 6
> Explanation: The last word is "joyboy" with length 6.
> ```

### 🧩 Approach

1. Split the string `s` into words using the `split()` method, which automatically handles multiple spaces.
2. Return the length of the last word in the list of words.

### 💡 Solution

```python
from typing import List

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        """
        Calculate the length of the last word in a string.

        Args:
            s (str): The input string.

        Returns:
            int: The length of the last word.
        """
        words: List[str] = s.split()
        return len(words[-1])
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
- Space Complexity: `O(n)`

---

## 88. Merge Sorted Array

- **LeetCode Link:** [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
- **Difficulty:** Easy
- **Topic(s):** Array, Two Pointers, Sorting

### 🧠 Problem Statement

> You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.
>
> Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.
>
> The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.
>
> Example 1:
>
> ```txt
> Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
> Output: [1,2,2,3,5,6]
> Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
> The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
> ```
>
> Example 2:
>
> ```txt
> Input: nums1 = [1], m = 1, nums2 = [], n = 0
> Output: [1]
> Explanation: The arrays we are merging are [1] and [].
> The result of the merge is [1].
> ```
>
> Example 3:
>
> ```txt
> Input: nums1 = [0], m = 0, nums2 = [1], n = 1
> Output: [1]
> Explanation: The arrays we are merging are [] and [1].
> The result of the merge is [1].
> Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
> ```

### 🧩 Approach

Use three pointers:

- `midx` points to the last valid element in `nums1` (`m - 1`)
- `nidx` points to the last element in `nums2` (`n - 1`)
- `right` points to the last index in `nums1` (`m + n - 1`)

Compare elements from the back and place the larger one at index `right`. Decrement pointers accordingly.

Repeat until `nidx` reaches 0 (no need to worry about `midx`, since the rest are already in place).

### 💡 Solution

```python
from typing import List

class Solution:
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
        midx: int = m - 1
        nidx: int = n - 1
        right: int = m + n - 1

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

## 121. Best Time to Buy and Sell Stock

- **LeetCode Link:** [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- **Difficulty:** Easy
- **Topic(s):** Array, Dynamic Programming

### 🧠 Problem Statement

> You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.
>
> You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
>
> Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.
>
> Example 1:
>
> ```txt
> Input: prices = [7,1,5,3,6,4]
> Output: 5
> Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
> Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
> ```
>
> Example 2:
>
> ```txt
> Input: prices = [7,6,4,3,1]
> Output: 0
> Explanation: In this case, no transactions are done and the max profit = 0.
> ```

### 🧩 Approach

Dynamic programming approach:

1. Initialize `profit` to `0` and `lowest` to the first price.
2. Iterate through the prices:

   - For each price, calculate the potential profit by subtracting `lowest` from the current price.
   - Update `profit` if the calculated profit is greater than the current `profit`.
   - Update `lowest` to be the minimum of the current price and `lowest`.

3. Return the `profit`.

This approach ensures that we always consider the lowest price seen so far, allowing us to calculate the maximum profit efficiently.

### 💡 Solution

```python
from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        """
        Calculate the maximum profit from a single buy and sell transaction.

        Args:
            prices (List[int]): The list of stock prices.

        Returns:
            int: The maximum profit achievable, or 0 if no profit can be made.
        """
        profit: int = 0
        lowest: int = prices[0]

        for price in prices:
            profit = max(profit, price - lowest)
            lowest = min(lowest, price)
        return profit
```

### 🧮 Complexity Analysis

- Time Complexity: `O(n)`
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
>
> Example 1:
>
> ```txt
> Input: nums = [3,2,3]
> Output: 3
> ```
>
> Example 2:
>
> ```txt
> Input: nums = [2,2,1,1,1,2,2]
> Output: 2
> ```

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
from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        """
        Find the majority element in an array using Boyer-Moore Voting Algorithm.

        Args:
            nums (List[int]): The input array.

        Returns:
            int: The majority element.
        """
        count: int = 0
        candidate: int = 0

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

---
