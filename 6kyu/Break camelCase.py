# Complete the solution so that the function will break up camel casing, using a space between words.

# Example
# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""


# My Python Solution 

def solution(s):
    camel_case_break = ""
    i = 0
    
    for ch in s:
        if ch.isupper() and i != 0:
            camel_case_break += f" {ch}"
        else:
            camel_case_break += ch
        i += 1
            
    return camel_case_break

#  My Refractored Solution

def solution(s):
    camel_case_break = ""
    
    for i, ch in enumerate(s):
        if ch.isupper() and i != 0:
            camel_case_break += f" {ch}"
        else:
            camel_case_break += ch
            
    return camel_case_break

# Code Wars Alternatives

def solution(s):
    return ''.join(' ' + c if c.isupper() else c for c in s)

# Or

def solution(s):
    newStr = ""
    for letter in s:
        if letter.isupper():
            newStr += " "
        newStr += letter
    return newStr

# Chat Gpt 4o Recomendation

def solution(s):
    return ''.join(f" {ch}" if ch.isupper() and i != 0 else ch for i, ch in enumerate(s))


"""
    Important Lessons:
        - Creating a list of string then appending them is faster then appending them as you go through each charcter of the string
        - Appending the strings together is more efficient then += 
"""