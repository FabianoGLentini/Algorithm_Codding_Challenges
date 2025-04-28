# In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

# The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

# Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

# You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

# The string has a length greater or equal to one and contains only letters from ato z.

# Examples:
# s="aaabbbbhaijjjm"
# printer_error(s) => "0/14"

# s="aaaxbbbbyyhwawiwjjjwwm"
# printer_error(s) => "8/22"


# My Python Solution With Writen Plan of Functrion

"""
    Stepts:
    
        1. Makes variable called error_count that will contain the count of errors as we iterate through the string
        2. Create a for loop that will go through each character
            3. Use if statement to check if the ASCII value of each character is not greater or equal to 97 and smaller or equal to 122, if true increment the error_count by 1
        4. Using f-string calculate the length of string and return the error_count in string as "<error_count>/<length of string>"
"""

def printer_error(s):
    error_count = 0
    
    for character in s:
        # Checks if character is not equal or between [a to m] in the alphabet, if true increments error_count
        if not (ord(character) >= 97 and ord(character) <= 109):
            error_count += 1 
    
    # Return amount of error over length of inputed string
    return f"{error_count}/{len(s)}"
    

# Code Wars Alternatives

def printer_error(s):
    errors = 0
    count = len(s)
    for i in s:
        if i > "m":
            errors += 1
    return str(errors) + "/" + str(count)

# Or

from re import sub
def printer_error(s):
    return "{}/{}".format(len(sub("[a-m]",'',s)),len(s))


# Chat Recomendations

def printer_error(s):
    # Initialize error_count for characters outside the range 'a' to 'm'
    error_count = sum(1 for character in s if character < 'a' or character > 'm')
    
    # Return the error count over the length of the string
    return f"{error_count}/{len(s)}"
