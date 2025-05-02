# This time no story, no theory. The examples below show you how to write function accum:

# Examples:
# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"
# The parameter of accum is a string which includes only letters from a..z and A..Z.


# My Python Solution

def accum(st):
    acum_str = ""
    i = 1
    
    for letter in st:
        acum_str += letter*i + "-"
        i += 1
        
    return acum_str.title()[:-1]

# Code Wars Alternatives

def accum(s):
    output = ""
    for i in range(len(s)):
        output+=(s[i]*(i+1))+"-"
    return output.title()[:-1]

# Or

def accum(s):
    return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))