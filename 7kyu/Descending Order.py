# Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

# Examples:
# Input: 42145 Output: 54421

# Input: 145263 Output: 654321

# Input: 123456789 Output: 987654321


# My Python Solution

def descending_order(num):
    return int("".join(sorted([x for x in str(num)], reverse = True)))


# Code Wars Alternative

def Descending_Order(num):
    if isinstance(num, int) and num >= 0:
        return int(''.join(sorted(str(num),reverse=True)))
    else:
        raise ValueError('Non-negative integer expected')

# Or

def Descending_Order(num):
    s = str(num)
    s = list(s)
    s = sorted(s)
    s = reversed(s)
    s = ''.join(s)
    return int(s)

# Chat GPT Recomendation for optimal clarity and efficiency

def descending_order(num):
    # Convert the number to a string and sort the digits in descending order
    sorted_digits = sorted(str(num), reverse=True)
    
    # Join the sorted digits and convert back to an integer
    return int("".join(sorted_digits))
