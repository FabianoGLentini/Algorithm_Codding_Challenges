"""
242. Valid Anagram
Solved
Easy
Topics
premium lock icon
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
"""

# My Python Solution  O(n), omega(1) and theta(n)
class Solution(object):
    def isAnagram(self, s, t):
        if len(s) != len(t):
            return False

        my_dict = dict()


        for c in s:
            if c not in my_dict:
                my_dict[c] = 0

            my_dict[c] += 1



        for c in t:
            if c not in my_dict or my_dict[c] == 0 :
                return False
            my_dict[c] -= 1
        
        return True

# Leet Code Community Alternative
class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if (len(s)==len(t)):
            a=set(s)
            for i in a:
                if(s.count(i)!=t.count(i)):
                    return False 
            return True 
        return False
