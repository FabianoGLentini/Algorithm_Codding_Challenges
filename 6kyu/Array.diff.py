# Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

# It should remove all values from list a, which are present in list b keeping their order.

# array_diff([1,2],[1]) == [2]
# If a value is present in b, all of its occurrences must be removed from the other:

# array_diff([1,2,2,2,3],[2]) == [1,3]



# My Python Code Wars Solution

def array_diff(a, b):
    filtered_list = [el for el in a if not(el in b)]
    
    return filtered_list

# Code Wars Alternatives

def array_diff(a, b):
    return [x for x in a if x not in b]

# Or

def array_diff(a, b):
    for n in b:
        while(n in a):
            a.remove(n)
    return a