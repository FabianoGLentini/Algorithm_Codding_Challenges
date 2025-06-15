 """
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
"""

# My First Solution O(n), theta(n) and omega(1)

class Solution(object):
    def containsDuplicate(self, nums):
        my_dict = dict()

        for val in nums:
            if my_dict.get(val) == 1: 
                return True
            else:
                my_dict[val] = 1
    
        return False
    

# My Second faster Refractor
class Solution(object):
    def containsDuplicate(self, nums):
        my_dict = set()

        for val in nums:
            if val in my_dict:
                return True
            
            my_dict.add(val)
    
        return False
        
# My fastest Refractor
class Solution(object):
    def containsDuplicate(self, nums):
        if len (nums) == len(set(nums)):
            return False

        return True
        
# Comunity Alternative solution:
class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        if len(set(nums)) == len(nums):
            return False
        return True