"""
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
"""

# My Python Solution
def count(s):
    letters_dict = {}
    
    for ch in set(s):
        letters_dict[ch] = s.count(ch)
        
        
    return letters_dict

# Code Wars Alternative
from collections import Counter

def count(string):
    return Counter(string)

# Or
def count(string):
  
    return {i: string.count(i) for i in string}

# Chat Gbt-4 Recomendations
def count_characters(s):
    """
    Counts the frequency of each character in a given string.

    Args:
        s (str): The input string for which character frequencies are to be counted.

    Returns:
        dict: A dictionary where the keys are unique characters from the string `s`,
              and the values are the number of times each character appears in `s`.

    Example:
        >>> count_characters("hello")
        {'h': 1, 'e': 1, 'l': 2, 'o': 1}
    """
    letters_dict = {}
    for ch in s:
        letters_dict[ch] = letters_dict.get(ch, 0) + 1
    return letters_dict