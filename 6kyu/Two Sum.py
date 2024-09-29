# Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

# For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

# The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

# Based on: https://leetcode.com/problems/two-sum/

# two_sum([1, 2, 3], 4) # returns (0, 2) or (2, 0)
# two_sum([3, 2, 4], 6) # returns (1, 2) or (2, 1)


# My Python Solution 

def two_sum(numbers, target):
    for i, num in enumerate(numbers):
        ck = target - num
        
        if ck in numbers[i+1:]:
            return (i, numbers.index(ck,i+1))

# Code Wars Alternatives 

def two_sum(nums, t):
    for i, x in enumerate(nums):
        for j, y in enumerate(nums):
            if i != j and x + y == t:
                return [i, j]

# Or 

from itertools import combinations as comb

def two_sum(numbers, target):
    for (ia, a),(ib, b) in comb(enumerate(numbers), 2):
        if a+b == target:
            return [ia, ib]


# Chat-Gbt 4o Recomendation

def two_sum(numbers, target):
    num_map = {}  # Dictionary to store numbers and their indices
    for i, num in enumerate(numbers):
        complement = target - num
        if complement in num_map:
            return num_map[complement], i
        num_map[num] = i


