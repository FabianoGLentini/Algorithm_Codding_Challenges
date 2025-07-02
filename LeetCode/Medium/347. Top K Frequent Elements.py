# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

# Example 1:

# Input: nums = [1,1,1,2,2,3], k = 2
# Output: [1,2]
# Example 2:

# Input: nums = [1], k = 1
# Output: [1]
 

# Constraints:

# 1 <= nums.length <= 105
# -104 <= nums[i] <= 104
# k is in the range [1, the number of unique elements in the array].
# It is guaranteed that the answer is unique.
 

# Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

# My Python Solution O(n) 
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """

        count_nums: dict[int, int] = defaultdict(int)
        max_k: int = 0

        for num in nums:
            count_nums[num] += 1
            max_k = max(max_k, count_nums[num])

        by_count = [[] for i in range(max_k + 1)]

        for num, count in count_nums.items():
            print(num,count)
            by_count[count].append(num)


        freq_k = []
        iterations = k

        for i in range(max_k, 0, -1):
            for num in by_count[i]:
                if iterations:
                    freq_k.append(num)
                    iterations -= 1


        return freq_k


# Code Wars Alternative
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # using heapq
        count  = Counter(nums)
        res = heapq.nlargest(k, count, key = count.get)
        return res