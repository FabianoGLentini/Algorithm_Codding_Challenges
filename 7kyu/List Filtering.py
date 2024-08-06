# In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

# Example
# filter_list([1,2,'a','b']) == [1,2]
# filter_list([1,'a','b',0,15]) == [1,0,15]
# filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


# My Python Solution 

def filter_list(l):
    return [i for i in l if type(i) == int]

# Code Wars Alternatives

def filter_list(l):
  return [i for i in l if not isinstance(i, str)]

# Or

def filter_list(l):
  return [x for x in l if type(x) is not str]


  