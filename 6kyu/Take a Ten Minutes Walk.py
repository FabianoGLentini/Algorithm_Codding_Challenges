"""
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
"""

# My Python Solution
def is_valid_walk(walk):
    x = 0
    y = 0
    
    if len(walk) != 10: return False
    
    for i in range(10):
        try:
            walk[i]
        except IndexError:
            return False
        
        if walk[i] == "n":
            y += 1
        elif walk[i] == "s":
            y -= 1
        elif walk[i] == "e":
            x += 1
        elif walk[i] == "w":
            x -= 1
          
    if x == 0 and y == 0:
        return True
    else:
        return False
    
# Code Wars Alternatives
def isValidWalk(walk):
    if (walk.count('n') == walk.count('s') and 
        walk.count('e') == walk.count('w') and
        len(walk) == 10):
            return True
    return False

# Or 
def isValidWalk(walk):
    return len(walk) == 10 and walk.count('n') == walk.count('s') and walk.count('e') == walk.count('w')

# Chat Gbt-4 Recommendations
def is_valid_walk(walk):
    # Check if walk has exactly 10 steps
    if len(walk) != 10:
        return False
    
    # Movement mappings: n/s affect y-axis, e/w affect x-axis
    directions = {"n": (0, 1), "s": (0, -1), "e": (1, 0), "w": (-1, 0)}
    
    # Track position starting at (0, 0)
    x, y = 0, 0
    
    # Update position based on each step in the walk
    for step in walk:
        if step in directions:
            dx, dy = directions[step]
            x += dx
            y += dy
        else:
            # Invalid step character
            return False

    # Check if we're back at the origin
    return x == 0 and y == 0
   