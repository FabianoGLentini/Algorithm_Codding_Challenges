# Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

# Example 1:

# Input: strs = ["eat","tea","tan","ate","nat","bat"]

# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

# Explanation:

# There is no string in strs that can be rearranged to form "bat".
# The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
# The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
# Example 2:

# Input: strs = [""]

# Output: [[""]]

# Example 3:

# Input: strs = ["a"]

# Output: [["a"]]

 

# Constraints:

# 1 <= strs.length <= 104
# 0 <= strs[i].length <= 100
# strs[i] consists of lowercase English letters.

# My Python Solution 

class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        
        anagram_dict = dict()

        for word in strs:
            sorted_ch = "".join(sorted(word))

            if sorted_ch in anagram_dict:
                anagram_dict[sorted_ch].append(word)

            else:
                anagram_dict[sorted_ch] = [word]
            


        anagrams = list()

        for key in anagram_dict:
            anagrams.append(anagram_dict[key])
            

        return anagrams
    

# Leetcode Community Alternative

def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        anagram = {}
        for s in strs:
            sorted_s = "".join(sorted(s))
            if sorted_s not in anagram:
                anagram[sorted_s] = []
            anagram[sorted_s].append(s)
        return list(anagram.values())