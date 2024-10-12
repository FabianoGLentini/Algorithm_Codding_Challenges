# Write Number in Expanded Form
# You will be given a number and you will need to return it as a string in Expanded Form. For example:

# expandedForm(12)    --> should return "10 + 2"
# expandedForm(42)    --> should return "40 + 2"
# expandedForm(70304) --> should return "70000 + 300 + 4"
# NOTE: All numbers will be whole numbers greater than 0.

# If you liked this kata, check out part 2!!


# My Python solution

def expanded_form(num):
    """
    Description:
    -  Return expanded form of num as string 

    Parameter:
    - num (Natural): provided natural number of indeterminate amount of digits

    Returns:
    - String: expanded form of provided num as string with addition signs

    Example:
    >>>  expanded_form(12) 
    '10 + 2'
    >>>  expanded_form(70304)
    '70000 + 300 + 4'

    Steps:
    1. Turn num into seperate string digits
    2. determine length of digits - 1 to determine how many trailing zeros will be needed 
    3. loop through digits_str_lst and at end of each loop decrement zero_trail
    4. if  dig not == 0 append dig + "0"*zero_trail
    4. return string of expanded_dig joined together with " + " str between each item
    """

    digits_str_lst = list(str(num))
    zero_trail = len(digits_str_lst) - 1 
    
    expanded_dig = []
    
    for dig in digits_str_lst:
        if dig != "0":
            expanded_dig.append( dig + "0"*zero_trail)
            
        zero_trail -= 1
    
    return  " + ".join(expanded_dig)

# Code Wars Alternatives

def expanded_form(n):
    result = []
    for a in range(len(str(n)) - 1, -1, -1):
        current = 10 ** a
        quo, n = divmod(n, current)
        if quo:
            result.append(str(quo * current))
    return ' + '.join(result)

# Or 

def expanded_form(num):
    num = list(str(num))
    return ' + '.join(x + '0' * (len(num) - y - 1) for y,x in enumerate(num) if x != '0')


# Chat Gbt-4o Recomendation

def expanded_form(num):
    """
    Description:
    - Return the expanded form of a natural number. 
      Each non-zero digit is multiplied by its place value and represented as a string, joined by ' + ' signs.

    Parameter:
    - num (int): A natural number (non-negative integer) of indeterminate length.

    Returns:
    - String: The expanded form of the input number, with non-zero digits shown as place values, joined by ' + '.

    Example:
    >>> expanded_form(12)
    '10 + 2'
    >>> expanded_form(70304)
    '70000 + 300 + 4'
    >>> expanded_form(0)
    '0'
    """

    # Handle edge case where num is 0
    if num == 0:
        return '0'

    digits_str_lst = list(str(num))
    trailing_zeros_count = len(digits_str_lst) - 1 
    
    expanded_terms = []
    
    for dig in digits_str_lst:
        if int(dig) != 0:  # Using int comparison for better performance
            expanded_terms.append(dig + "0" * trailing_zeros_count)
        trailing_zeros_count -= 1
    
    return " + ".join(expanded_terms)
