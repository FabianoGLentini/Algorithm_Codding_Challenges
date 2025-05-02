# Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

# Examples:
# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

# a = "abcdefghijklmnopqrstuvwxyz"
# longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


# My Python Solution 

def longest(a1, a2):
    unique_letter_combined = "".join(sorted(set(a1 + a2)))
    
    return unique_letter_combined

# My Refractored Solution

def longest(a1, a2):
    return "".join(sorted(set(a1 + a2)))

# Code Wars Alternative

def longest(s1, s2):
    return ''.join(sorted(set(s1) | set(s2)))

# Chat Recomendations

def longest(a1, a2):
    # Combine strings a1 and a2, convert to a set to remove duplicates, then sort
    unique_sorted_letters = sorted(set(a1 + a2))
    
    # Join sorted letters into a single string
    return ''.join(unique_sorted_letters)
