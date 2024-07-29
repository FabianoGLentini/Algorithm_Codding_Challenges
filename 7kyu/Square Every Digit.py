"""
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
"""

# My Python soltion

def square_digits(num):
    def cube(x):
        return str(int(x)**2)
        
        
    squared_dig_list = list(map(cube, str(num)))
    squared_dig_num = int("".join(squared_dig_list))

    
    return squared_dig_num
    
# Code Wars Alternatives

def square_digits(num):
    ret = ""
    for x in str(num):
        ret += str(int(x)**2)
    return int(ret)
    
# Or

def square_digits(num):
    return int(''.join(str(int(d)**2) for d in str(num)))  