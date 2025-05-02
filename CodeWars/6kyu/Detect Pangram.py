# A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

# Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


# My Python Solution 

def is_pangram(string):
    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    return all(ch in string.lower() for ch in alphabet)

# My Refractored Solution

def is_pangram(string):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    return all(ch in string.lower() for ch in alphabet)

# Code Wars Alternatives

import string

def is_pangram(s):
    s = s.lower()
    for char in 'abcdefghijklmnopqrstuvwxyz':
        if char not in s:
            return False
    return True


# Char Recomendation

import string

def is_pangram(s):
    return set(string.ascii_lowercase).issubset(set(s.lower()))
