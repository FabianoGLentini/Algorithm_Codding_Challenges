# An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

# Example: (Input --> Output)

# "Dermatoglyphics" --> true
# "aba" --> false
# "moOse" --> false (ignore letter case)


# My Python Solution 

def is_isogram(string):
    return len(set(string.lower())) == len(string.lower())


# Code Wars Alternatives

def is_isogram(string):
    return len(string) == len(set(string.lower()))


# Or

def is_isogram(string):
    string = string.lower()
    for letter in string:
        if string.count(letter) > 1: return False
    return True