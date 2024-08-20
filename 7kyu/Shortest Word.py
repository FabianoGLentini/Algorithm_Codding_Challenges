# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.


# My Python Solution 

def find_short(s):
    str_word_list_length = map(len,s.split())
    
    return min(str_word_list_length)

# Code Wars Alternatives

def find_short(s):
    return min(len(x) for x in s.split())

# Or

def find_short(s):
    return len(min(s.split(' '), key=len))