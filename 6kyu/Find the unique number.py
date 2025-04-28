# There is an array with some numbers. All numbers are equal except for one. Try to find it!

# find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
# find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55
# It’s guaranteed that array contains at least 3 numbers.

# The tests contain some very huge arrays, so think about performance.

# This is the first kata in series:

# Find the unique number (this kata)
# Find the unique string
# Find The Unique


# My Python Solution 

def find_uniq(arr):
    return next(num for num in set(arr) if arr.count(num) == 1)

# Code Wars Alternative

def find_uniq(arr):
    a, b = set(arr)
    return a if arr.count(a) == 1 else b
    
# Chat Recomendation

def find_uniq(arr):
    # Create a dictionary to count occurrences of each element
    counts = {}
    for num in arr:
        counts[num] = counts.get(num, 0) + 1
    
    # Find and return the unique element
    for num in counts:
        if counts[num] == 1:
            return num

# Or For Larger Inputs

from collections import Counter

def find_uniq(arr):
    counts = Counter(arr)  # Create a Counter object to count occurrences
    for num, count in counts.items():
        if count == 1:
            return num
