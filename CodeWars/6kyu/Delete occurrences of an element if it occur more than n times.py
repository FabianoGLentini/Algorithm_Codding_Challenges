# Enough is enough!
# Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
# He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

# Task
# Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
# For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
# With list [20,37,20,21] and number 1, the result would be [20,37,21].

# My Python Solution

def delete_nth(order,max_e):
    """
    Description:
    - Produce lst from consumed lst with atmost max_e of repeated num without changing order
    
    Parameters: 
    - order (List): lst of mixed Natural without a specific order
    - max_e (Natural): number indicating max repeated value per num for new lst
    
    Returns:
    - List: lst produce in same order as provided lst without num repeating more then  max_e
    
    Example:
    >>> delete_nth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
    [1, 1, 3, 3, 7, 2, 2, 2]
    >>>  delete_nth([12, 39, 19, 39, 39, 19, 12], 1), 
     [12, 39, 19]
     
     Steps:
     1. Create keys list var from set of order argument
     2. Create count_dict using loop, which will have element with each key from keys with value of 0
     3. We loop through order list num
        a. Increment count_dict[num] by 1 every loop to track amount of times weve encountered the num
        b. Heck if count_dict[num] is <= to max_e value 
            - If yes add to new list 
            - Else continue iteration
    4. Return our new_list
    """
    keys = set(order)
    
    # count_dict tracks amount of time weve incounter a number in order argument
    count_dict = {}
    for key in keys:
        count_dict[key] = 0
    
    # Create list in same order as order arg without duplicates above max_e
    new_list = []
    for num in order:
        count_dict[num] += 1
        
        if count_dict[num] <= max_e:
            new_list.append(num)
    
    return new_list
        

# Code Wars Alternatives

def delete_nth(order,max_e):
    ans = []
    for o in order:
        if ans.count(o) < max_e: ans.append(o)
    return ans

# Or

def delete_nth(order, max_e):
    d = {}
    res = []
    for item in order:
      n = d.get(item, 0)
      if n < max_e:
        res.append(item)
        d[item] = n+1
    return res

# Chat-Gbt 4o Recomendation

from collections import defaultdict

def delete_nth(order, max_e):
    """
    Description:
    - Produce a list from the input list `order`, allowing at most `max_e` occurrences of each number, without changing the order.
    
    Parameters:
    - order (List[int]): A list of integers in arbitrary order.
    - max_e (int): The maximum number of times a number can appear in the output list.
    
    Returns:
    - List[int]: A list in the same order as the input list, but without any number appearing more than `max_e` times.
    
    Example:
    >>> delete_nth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)
    [1, 1, 3, 3, 7, 2, 2, 2]
    
    >>> delete_nth([12, 39, 19, 39, 39, 19, 12], 1)
    [12, 39, 19]
    
    Steps:
    1. Initialize `count_dict` to track occurrences of each number.
    2. Iterate through the `order` list.
       a. For each number, check if its count in `count_dict` is less than `max_e`.
       b. If it is, append the number to the result list.
    3. Return the result list.
    """
    count_dict = defaultdict(int)  # Automatically initializes non-existing keys with 0
    result = []

    for num in order:
        if count_dict[num] < max_e:
            result.append(num)
            count_dict[num] += 1

    return result
