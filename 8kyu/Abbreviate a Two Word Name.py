# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

# The output should be two capital letters with a dot separating them.

# It should look like this:

# Sam Harris => S.H

# patrick feeney => P.F


# My Python Solution 

def abbrev_name(name):
    return ".".join([word[:1] for word in name.split(" ")]).title()

# Code Wars Alternative

def abbrevName(name):
    return '.'.join(w[0] for w in name.split()).upper()

# Or

def abbrevName(name):
    names = name.split()
    return f"{names[0][0]}.{names[1][0]}".upper()