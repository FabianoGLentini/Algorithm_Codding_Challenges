# Given an array of integers, find the one that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

# Examples
# [7] should return 7, because it occurs 1 time (which is odd).
# [0] should return 0, because it occurs 1 time (which is odd).
# [1,1,2] should return 2, because it occurs 1 time (which is odd).
# [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
# [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

# My Python Solution

def find_it(seq):
    obj_seq = {}

    for it in seq:
        obj_seq[it] = obj_seq.get(it,0) + 1
    
    for el in obj_seq:
        
        if obj_seq[el] % 2 != 0:
            return el

# My Refractored Solution

def find_it(seq):
    obj_seq = {it: seq.count(it) for it in seq}
    
    for el in obj_seq:
        
        if obj_seq[el] % 2 != 0:
            return el
        

# Code Wars Alternatives

def find_it(seq):
    for elem in set(seq):
        if seq.count(elem) % 2 == 1:
            return elem
        
        
    

