# Welcome.

# In this kata you are required to, given a string, replace every letter with its position in the alphabet.

# If anything in the text isn't a letter, ignore it and don't return it.

# "a" = 1, "b" = 2, etc.

# Example
# Input = "The sunset sets at twelve o' clock."
# Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


# My Python Solution 

def alphabet_position(text):
    test_lower_case = text.lower()
    
    return " ".join([str(ord(char) - 96) for char in test_lower_case if ord(char) > 96 and ord(char) < 123])

# Code Wars Alternatives

def alphabet_position(text):
    return ' '.join(str(ord(c) - 96) for c in text.lower() if c.isalpha())

# Or


def alphabet_position(text):
alphabet = 'abcdefghijklmnopqrstuvwxyz'

    if type(text) == str:
        text = text.lower()
        result = ''
        for letter in text:
            if letter.isalpha() == True:
                result = result + ' ' + str(alphabet.index(letter) + 1)
        return result.lstrip(' ')