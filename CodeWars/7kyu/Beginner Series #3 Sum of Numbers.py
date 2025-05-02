# Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

# Note: a and b are not ordered!

# Examples (a, b) --> output (explanation)
# (1, 0) --> 1 (1 + 0 = 1)
# (1, 2) --> 3 (1 + 2 = 3)
# (0, 1) --> 1 (0 + 1 = 1)
# (1, 1) --> 1 (1 since both are same)
# (-1, 0) --> -1 (-1 + 0 = -1)
# (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
# Your function should only return a number, not the explanation about how you get that number.


# My Python Solution

def get_sum(a,b):
    if a == b:
        return a
    
    largest = max(a,b)
    samllest = min(a,b)
    return sum(list(range(samllest,largest + 1)))

# Code Wars Alternatives

def get_sum(a,b):
    return sum(range(min(a, b), max(a, b) + 1))

# Or

def get_sum(a, b):
    return (a + b) * (abs(a - b) + 1) // 2

# Chat Optimized and Semantically Clear Version Opinion

def get_sum(a, b):
    if a == b:
        return a
    return sum(range(min(a, b), max(a, b) + 1))
