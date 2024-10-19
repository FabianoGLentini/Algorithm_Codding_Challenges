# Nathan loves cycling.

# Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

# For example:

# time = 3 ----> litres = 1

# time = 6.7---> litres = 3

# time = 11.8--> litres = 5


# My Python Solution

def litres(time):
    return int(0.5*time)

# Code Wars alternatives

def litres(time):
    return time // 2

# Or

import math
def litres(time):
    return math.floor(.50 * time)