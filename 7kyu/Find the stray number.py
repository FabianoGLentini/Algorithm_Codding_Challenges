# You are given an odd-length array of integers, in which all of them are the same, except for one single number.

# Complete the method which accepts such an array, and returns that single different number.

# The input array will always be valid! (odd-length >= 3)

# Examples
# [1, 1, 2] ==> 2
# [17, 17, 3, 17, 17, 17, 17] ==> 3


# My Python Solution 
def stray(arr):
    num_ck_list = set(arr)
    
    for value in num_ck_list:
        if arr.count(value) == 1:
            return value

# Code Wars Alternatives

def stray(arr):
    for x in arr:
        if arr.count(x) == 1:
            return x

# Or

def stray(arr):
    return min(arr, key=arr.count)


# Chat GPT - 4o Recommendation

def stray(arr):
    counts = {}
    
    # Count occurrences of each element
    for value in arr:
        counts[value] = counts.get(value, 0) + 1
    
    # Return the value that occurs only once
    for value, count in counts.items():
        if count == 1:
            return value
