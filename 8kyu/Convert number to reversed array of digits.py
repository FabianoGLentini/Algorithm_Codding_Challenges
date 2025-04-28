"""
digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
"""

# My Python Solution 
def digitize(n):
    lst =  (list(map(int, str(n)))) 
    return lst[::-1]
    
# Code Wars Alternative
def digitize(n):
    return [int(x) for x in str(n)[::-1]]

# Or 
def digitize(n):
    return map(int, str(n)[::-1])

# Chat Gbt-4 Recommendation
def digitize(n):
    """Convert a number into a reversed list of its digits."""
    return [int(digit) for digit in str(n)][::-1]


