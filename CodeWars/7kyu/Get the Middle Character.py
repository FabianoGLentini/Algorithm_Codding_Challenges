# You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

# #Examples:

# Kata.getMiddle("test") should return "es"

# Kata.getMiddle("testing") should return "t"

# Kata.getMiddle("middle") should return "dd"

# Kata.getMiddle("A") should return "A"
# #Input

# A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

# #Output

# The middle character(s) of the word represented as a string.


# My Python Solution

def get_middle(str):
    str_length = len(str)
    
    if str_length % 2 == 0: 
        return str[int(str_length/2 -1): int(str_length/2 + 1)]
    
    else:
        return str[int(str_length/2)]


# My Refractor

def get_middle(str):
    str_mid = len(str) / 2
    
    return str[int(str_mid)] if len(str) % 2 != 0 else str[int(str_mid -1): int(str_mid + 1)]
    
# Code Wars Alternatives

def get_middle(s):
    index, odd = divmod(len(s), 2)
    return s[index] if odd else s[index - 1:index + 1]

# Or

import math
def get_middle(s):
    #your code here
    x = len(s)
    y = int(x/2)
    if x%2==0:
        return s[y-1:y+1]
    else:
        return s[y:y+1]