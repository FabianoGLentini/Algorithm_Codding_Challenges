# You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

# If there is no index that would make this happen, return -1.

# For example:
# Let's say you are given the array {1,2,3,4,3,2,1}:
# Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

# Let's look at another one.
# You are given the array {1,100,50,-51,1,1}:
# Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

# Last one:
# You are given the array {20,10,-80,10,10,15,35}
# At index 0 the left side is {}
# The right side is {10,-80,10,10,15,35}
# They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
# Index 0 is the place where the left side and right side are equal.

# Note: Please remember that in most languages the index of an array starts at 0.

# Input
# An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

# Output
# The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

# Note
# If you are given an array with multiple answers, return the lowest correct index.


# My Python Solution with Psuedo Code 

"""
    Inpute: array of numbers possibly all integers
    Oupute: The index position that split the array into 2 sums that are equal to eachoter or -1 for no such possibileties
    
    Example: 
        find_even_index([1,2,3,4,3,2,1]) // should return 3
        find_even_index([1,100,50,-51,1,1]) // should return 1
        find_even_index([1,2,3,4,5,6]) // should return -1
        find_even_index([0,0,0,0,0]) // should return 0,"Should pick the first index if more cases are valid" 
        
    Process:
        1. loop through each index position of the given array
            2. Every loop create a shallow copy of the numbers before and another copy of the onses after index position
            3. Make and if statement that will sum and check if sum1 == sum2, if True return index position, else continue loop 
        4. If loop finishes all iterations and has not found an index position that splits the array into 2 sums evenly, return -1 indicating it does not have such index
"""

def find_even_index(array):
    for index in range(0, len(array)):
        
        # Shallow copy of left and right side sum excluding index position itsel
        left_side_array_sum = sum(array[:index])
        right_side_array_sum = sum(array[index + 1:])
        
        if left_side_array_sum == right_side_array_sum:
            return index
        
    return -1

# Code Wars Alternatives

def find_even_index(arr):
    for i in range(len(arr)):
        if sum(arr[:i]) == sum(arr[i+1:]):
            return i
    return -1

# Or

def find_even_index(lst):
    left_sum = 0
    right_sum = sum(lst)
    for i, a in enumerate(lst):
        right_sum -= a
        if left_sum == right_sum:
            return i
        left_sum += a
    return -1

# Chat Recomendation For Psuedo And Code

"""
    Revised Pseudo Code
        1. Initialize loop: Loop through each index position of the given array.
        2. Calculate sums: For each index, calculate the sum of elements on the left and right sides of the index (excluding the element at the index itself).
        3. Check condition: If the sums of the left and right sides are equal, return the current index.
        4. End loop: If the loop finishes all iterations without finding an index that splits the array into two equal sums, return -1 to indicate no such index exists.
"""

def find_even_index(array):
    total_sum = sum(array)
    left_sum = 0

    for index, value in enumerate(array):
        total_sum -= value  # This is the right side sum after excluding the current index value

        if left_sum == total_sum:
            return index

        left_sum += value  # Add the current value to the left side sum for the next iteration

    return -1
