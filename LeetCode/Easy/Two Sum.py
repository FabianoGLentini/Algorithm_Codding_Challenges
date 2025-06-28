# 1. Two Sum
# Solved
# Easy
# Topics
# premium lock icon
# Companies
# Hint
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

 

# Example 1:

# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
# Example 2:

# Input: nums = [3,2,4], target = 6
# Output: [1,2]
# Example 3:

# Input: nums = [3,3], target = 6
# Output: [0,1]
 

# Constraints:

# 2 <= nums.length <= 104
# -109 <= nums[i] <= 109
# -109 <= target <= 109
# Only one valid answer exists.
 

# Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

# My Python First Attempt at O(n^2)

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        
        for i in range(len(nums)):
            num = nums[i]
            computedTarget = target - num
            
            for j in range(i + 1, len(nums)):
                if nums[j] == computedTarget:
                    return [i,j]

# My Refractor for O(n)

  def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        # dictionary to store values
        # pair key = element & value = index pos of last seen element
        passedValues = dict();    
        
        # Loop/ store val in hash map
        for i in range(len(nums)):
            curr = nums[i]
            computeValue = target - curr

            if computeValue in passedValues:
                return [passedValues[computeValue], i]
            
            passedValues[curr] = i




