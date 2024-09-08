# Task:
# Given a list of integers, determine whether the sum of its elements is odd or even.

# Give your answer as a string matching "odd" or "even".

# If the input array is empty consider it as: [0] (array with a zero).

# Examples:
# Input: [0]
# Output: "even"

# Input: [0, 1, 4]
# Output: "odd"

# Input: [0, -1, -5]
# Output: "even"
# Have fun!


# My Python Solution

def odd_or_even(arr):
    return "even" if sum(arr) % 2 == 0 else "odd"

# Code Wars Alternative

def oddOrEven(arr):
    """determine whether a given list of numbers is odd or even"""
    if sum(arr) % 2 == 0:
        return "even"
    else:
        return "odd"
   