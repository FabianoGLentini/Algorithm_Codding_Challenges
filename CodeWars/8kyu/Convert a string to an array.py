# Write a function to split a string and convert it into an array of words.

# Examples (Input ==> Output):
# "Robin Singh" ==> ["Robin", "Singh"]

# "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


# My Python Solution 

def string_to_array(str):
    return str.split(" ")

# Code Wars Alternative

def string_to_array(string): # Mostly just interesting use of or
    return string.split() or ['']