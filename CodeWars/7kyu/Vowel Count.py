# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.

# My Python Solution 

def get_count(str):
    vowels = ["a", "e", "i", "o", "u"]
    
    # Create arr out of all the letters of str that are included in vowels array
    filtered_lst = [x for x in str if x in vowels]
    
    return len(filtered_lst)
    
    
# Code Wars Alternatives

def getCount(inputStr):
    num_vowels = 0
    for char in inputStr:
        if char in "aeiouAEIOU":
           num_vowels = num_vowels + 1
    return num_vowels

    # Or

def getCount(inputStr):
    return sum(1 for let in inputStr if let in "aeiouAEIOU")