# There is a bus moving in the city which takes and drops some people at each bus stop.

# You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

# Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

# Take a look on the test cases.

# Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

# The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


# My First Python Solution

def number(bus_stops):
    on_bus = sum(on for [on,off] in bus_stops)
    off_bus = sum(off for [on,off] in bus_stops)
    
    return on_bus - off_bus

# My Refractored Solution

def number(bus_stops):
    total_on_bus = sum(on - off for on,off in bus_stops)
    
    return total_on_bus

# My Attempt at making it even more Efficient (Note: this was slightly less efficient then the refractored on as the built in sum() method is more efficient)

def number(bus_stops):
    total_on_bus = 0
    
    for [on,off] in bus_stops:
        total_on_bus += on - off
        
    
    return total_on_bus

# Code Wars Alternatives

def number(bus_stops):
    return sum([stop[0] - stop[1] for stop in bus_stops])

# Or

def number(stops):
    return sum(i - o for i, o in stops)
