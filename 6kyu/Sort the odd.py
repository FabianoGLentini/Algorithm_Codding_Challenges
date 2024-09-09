# Task
# You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

# Examples
# [7, 1]  =>  [1, 7]
# [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
# [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

# My Python Solution With Psuedo Notes

"""
    Signature: List of Integers -> List of Integers
    Purpose: Output from given List a new List with odd Integers
                in ascending order while leaving even Integers
                in there original position.
"""

def sort_array(source_array):
    # Create List called sorted_odd which will filter and sort
    #  odd Integers as a shallow copy of source_array
    sorted_odd = sorted([int for int in source_array if int % 2 > 0])

    # Create Variable called sorted_list which will copy and go 
    # through source_array replacing odd integers with the poped 
    # first Integer of sorted_odd while leaving even numbers as is.
    sorted_list = [sorted_odd.pop(0) if int % 2 > 0 else int for int in source_array]
    
    return sorted_list

# My Refractored Solution

def sort_array(source_array):
    # sorted_odd will contain shallow copy of odd Int in ascending order from source_array
    sorted_odd = sorted([int for int in source_array if int % 2 > 0])
    
    # sorted_list contains shallow copy of source_array with odd Int replaced in order from sorted_odd items
    sorted_list = [sorted_odd.pop(0) if int % 2 > 0 else int for int in source_array]
    
    return sorted_list


# Code Wars Alternatives

def sort_array(source_array):
    result = sorted([l for l in source_array if l % 2 == 1])
    for index, item in enumerate(source_array):
        if item % 2 == 0:
            result.insert(index, item)
    return result

# Or

def sort_array(source_array):
    odd = []
    for i in source_array:
        if i % 2 == 1:
            odd.append(i)
    odd.sort()
    x=0
    for j in range(len(source_array)):
        if source_array[j]%2==1:
            source_array[j]=odd[x]
            x+=1
            
    return source_array

# Chat - Gpt 4o Recomendation 

def sort_array(source_array):
    # Extract and sort odd numbers
    odd_numbers = sorted([num for num in source_array if num % 2 != 0])
    
    # Replace odd numbers in original array with the sorted odd numbers
    odd_iter = iter(odd_numbers)
    sorted_list = [next(odd_iter) if num % 2 != 0 else num for num in source_array]
    
    return sorted_list


