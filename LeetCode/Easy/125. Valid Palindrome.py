# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

 

# Example 1:

# Input: s = "A man, a plan, a canal: Panama"
# Output: true
# Explanation: "amanaplanacanalpanama" is a palindrome.
# Example 2:

# Input: s = "race a car"
# Output: false
# Explanation: "raceacar" is not a palindrome.
# Example 3:

# Input: s = " "
# Output: true
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# Since an empty string reads the same forward and backward, it is a palindrome.
 

# Constraints:

# 1 <= s.length <= 2 * 105
# s consists only of printable ASCII characters.

# My Python First Solution of O(n) time complexity

class Solution:
    def isPalindrome(self, s: str) -> bool:
        alphabet_dict: dict(str) = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u', 'v','w','x','y','z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'}
        i_start: int = 0
        i_end: int = len(s) - 1

        while i_start < i_end:
            print(s[i_start] + ", " + s[i_end])
            print(str(i_start) + ", " + str(i_end))
            
            while not s[i_start].lower() in alphabet_dict:
                i_start += 1

                try:
                    s[i_start]
                except IndexError:
                    return True

            while not s[i_end].lower() in alphabet_dict:
                i_end -= 1

                try:
                    s[i_end]
                except IndexError:
                    return True
                    

            if s[i_start].lower() != s[i_end].lower():
                return False

            i_start += 1
            i_end -= 1


        
        return True
    
# My 2nd Pass Solution

class Solution:
    def isPalindrome(self, s: str) -> bool:
        i_start: int = 0
        i_end: int = len(s) - 1

        while i_start < i_end:            
            while not self.isAlphanumeric(s[i_start].lower()):
                i_start += 1

                try:
                    s[i_start]
                except IndexError:
                    return True

            while not self.isAlphanumeric(s[i_end].lower()):
                i_end -= 1

                try:
                    s[i_end]
                except IndexError:
                    return True
                    

            if s[i_start].lower() != s[i_end].lower():
                return False

            i_start += 1
            i_end -= 1


        
        return True

    def isAlphanumeric (self, ch: str) -> bool:
        return (ord(ch) <= 57 and ord(ch) >= 48 ) or (ord(ch) <= 122 and ord(ch) >= 97)

# My 3rd Pass Solution
class Solution:
    def isPalindrome(self, s: str) -> bool:
        i_start: int = 0
        i_end: int = len(s) - 1

        while i_start < i_end:      

            if not self.isAlphanumeric(s[i_start].lower()):
                i_start += 1
                continue

            elif not self.isAlphanumeric(s[i_end].lower()):
                i_end -= 1
                continue


            elif s[i_start].lower() != s[i_end].lower():
                return False

            else:
                i_start += 1
                i_end -= 1


        
        return True

    def isAlphanumeric (self, ch: str) -> bool:
        return (ord(ch) <= 57 and ord(ch) >= 48 ) or (ord(ch) <= 122 and ord(ch) >= 97)


# My Final Pass Solution:
class Solution:
    def isPalindrome(self, s: str) -> bool:
        i_start: int = 0
        i_end: int = len(s) - 1

        while i_start < i_end:      

            if not s[i_start].isalnum():
                i_start += 1

            elif not s[i_end].isalnum():
                i_end -= 1


            elif s[i_start].lower() != s[i_end].lower():
                return False

            else:
                i_start += 1
                i_end -= 1


        
        return True
    
# Leetcode Comunity Alternative

class Solution:
    def isPalindrome(self, s: str) -> bool:
        processed_s = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
        return processed_s == processed_s[::-1]