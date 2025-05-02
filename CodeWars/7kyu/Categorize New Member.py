# The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

# To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

# Input
# Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

# Output
# Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

# Example
# input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
# output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


# My Python Solution 

def open_or_senior(data):
    new_member_category_list = []
    
    # Loop through list of new Members to determine if they are senior or open and create new_member_category list
    for [age,handicap] in data:
    
        # cehck if the age is >= 55 and handicap > 7 to determine to add "Senior" or "Open" to new_member_category_list
        if age >= 55 and handicap > 7:
            new_member_category_list.append("Senior")
        
        else:
            new_member_category_list.append("Open")
        
    return new_member_category_list

# My Refractored Solution 

def open_or_senior(data):
    new_member_category_list = []
    
    # Loop through list of new Members to determine if they are senior or open and add new_member_category list
    for [age,handicap] in data:
        
        # cehck if the age is >= 55 and handicap > 7 to determine to add "Senior" or "Open" to new_member_category_list
        new_member_category_list.append("Senior" if age >= 55 and handicap > 7 else "Open")

    return new_member_category_list

# Code Wars Alternatives

def openOrSenior(data):
  return ["Senior" if age >= 55 and handicap >= 8 else "Open" for (age, handicap) in data]

# Or 

def openOrSenior(data):
    res = []
    for i in data:
      if i[0] >= 55 and i[1] > 7:
        res.append("Senior")
      else:
        res.append("Open")
    return res

# Chat Recomendations

def open_or_senior(data):
    # Determine if each member is "Senior" or "Open" based on age and handicap
    return ["Senior" if age >= 55 and handicap > 7 else "Open" for age, handicap in data]
