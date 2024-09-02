# You might know some pretty large perfect squares. But what about the NEXT one?

# Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

# If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

# Examples ( Input --> Output )
# 121 --> 144
# 625 --> 676
# 114 --> -1  #  because 114 is not a perfect square


# My Pyton Solution With Psuedo

"""
    Function Purpose:
        Find the next perfect square integer of the inputed integer if input is a perfect square else provide -1 as a result

    Input: Integer
    Output: Integer of the next perfect square or -1 if the input is not a perfect square
    
    Steps of Function:
        1. Create variable called square_num, that will hold sqrt(num) to then be use to check and find the next square root
        2. Check if input integer is a perfect square with expression: square_num % 1 === 0
            - if false return -1 terminating the function before it continues further
        3. Return (square_num + 1)**2 to find the next perfect square number
        
"""
import math
    
def find_next_square(num):
    square_num = math.sqrt(num)
    
    if square_num % 1 != 0:
        return -1
    
    return (square_num + 1)**2

# Code Wars Alternatives

def find_next_square(sq):
    root = sq ** 0.5
    if root.is_integer():
        return (root + 1)**2
    return -1

# Or

def find_next_square(sq):
    x = sq**0.5    
    return -1 if x % 1 else (x+1)**2

# Chat Recommendations of Psuedo and Code Optimization

"""
Function Purpose:
    - Find the next perfect square integer of the input integer if the input is a perfect square; otherwise, return -1.

Input: Integer
Output: Integer (the next perfect square) or -1 if the input is not a perfect square

Steps of Function:
    1. Calculate the square root of the input integer and store it in a variable called square_num.
    2. Check if the square root (square_num) is an integer:
        - If it is not an integer (i.e., square_num is not a whole number), return -1 to indicate the input is not a perfect square.
    3. If square_num is an integer, calculate the next perfect square by incrementing square_num by 1 and squaring the result.
    4. Return the calculated next perfect square.
"""

import math

def find_next_square(num):
    sqrt_num = math.sqrt(num)
    
    # Check if the number is a perfect square
    if not sqrt_num.is_integer():
        return -1
    
    # Calculate the next perfect square
    next_square = (math.isqrt(num) + 1) ** 2
    return next_square


