# The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

# Examples
# "din"      =>  "((("
# "recede"   =>  "()()()"
# "Success"  =>  ")())())"
# "(( @"     =>  "))((" 
# Notes
# Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


# My Python Solution

"""
    Pseudo:
    
        Goal:
        
        a function that return a new string with "(" or ")" replacing the characters based on if they show up once or more. Ignore cases
            - Character return "(" if character appears once
            - Character return ")" if character appears more then once
            
        
        Steps:
        
            - loop through each character and check if its count value from string is greater then 1 then add to new string the appropriate parentheses
            - return new string
            
            

"""

def duplicate_encode(word):
    encoded_word = ""
    word = word.lower()
    
    for char in word:
        
        if word.count(char) > 1:
            encoded_word += ")"
        
        else:
            encoded_word += "("
        
        
    return encoded_word
    
# My Refractored Code

def duplicate_encode(word):
    return "".join(")" if  word.lower().count(char) > 1 else "(" for char in  word.lower())
        
    
# Code Wars Alternatives

from collections import Counter

def duplicate_encode(word):
    word = word.lower()
    counter = Counter(word)
    return ''.join(('(' if counter[c] == 1 else ')') for c in word)

# Or

def duplicate_encode(word):
    word = word.lower()
    return ''.join('(' if word.count(x) == 1 else ')' for x in word)