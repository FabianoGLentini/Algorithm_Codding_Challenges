"""
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
"""

# My Python Solution 
def count_smileys(arr):
    def validSmileys (sml):
        if len(sml) == 3 and (sml[1] != "-" and sml[1] != "~"):
            return False
        
        return (sml[0] == ":" or sml[0] == ";") and (sml[-1] == "D" or sml[-1] == ")") 
        
    count = len(list(filter(validSmileys, arr)))
    
    return count
    
# Code Wars Alternatives
def count_smileys(arr):
    total = 0
    eyes = ':;'
    nose = '-~'
    mouth = ')D'
    for char in arr:

        if len(char) == 3:
            if char[0] in eyes and char[1] in nose and char[2] in mouth:
                total += 1

        elif len(char) == 2:
            if char[0] in eyes and char[1] in mouth:
                total += 1
    return total

# Or
from re import findall
def count_smileys(arr):
    return len(list(findall(r"[:;][-~]?[)D]", " ".join(arr))))

# Chat Gbt-4 Recommendation
def count_smileys(arr):
    def is_valid_smiley(smiley):
        if len(smiley) == 3:
            return (smiley[0] in ":;") and (smiley[1] in "-~") and (smiley[2] in "D)")
        elif len(smiley) == 2:
            return (smiley[0] in ":;") and (smiley[1] in "D)")
        return False

    return sum(1 for smiley in arr if is_valid_smiley(smiley))
