# Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

# For example:

# unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
# unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
# unique_in_order([1, 2, 2, 3, 3])   == [1, 2, 3]
# unique_in_order((1, 2, 2, 3, 3))   == [1, 2, 3]


# My Python Solution

def unique_in_order(sequence):
    sorted_sequence = []
    
    for ch in sequence:
        if len(sorted_sequence) == 0 or ch != sorted_sequence[-1]:
            sorted_sequence.append(ch)
    
    return sorted_sequence

# Code Wars Alternatives

def unique_in_order(iterable):
    result = []
    prev = None
    for char in iterable[0:]:
        if char != prev:
            result.append(char)
            prev = char
    return result


# Chat Recomendation

from itertools import groupby

def unique_in_order(sequence):
    return [key for key, _ in groupby(sequence)]
