# Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

# a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

# The four operators are "add", "subtract", "divide", "multiply".

# A few examples:(Input1, Input2, Input3 --> Output)

# 5, 2, "add"      --> 7
# 5, 2, "subtract" --> 3
# 5, 2, "multiply" --> 10
# 5, 2, "divide"   --> 2.5
# Try to do it without using if statements!

# My Python Solution 

def arithmetic(a, b, operator):
    operations = {"add" : a + b, 
                 "subtract" : a - b, 
                 "multiply": a * b, 
                 "divide": a / b}
    
    return operations[operator]

# Code Wars Alternatives

def arithmetic(a, b, operator):
    return {
        'add': a + b,
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b,
    }[operator]

# Or

def arithmetic(a, b, operator):
    match operator:
        case 'add':
            return a + b
        case 'subtract':
            return a - b
        case 'multiply':
            return a * b
        case 'divide':
            return a / b
        case _:
            raise ValueError(f'Unknown type of operator: {operator}')

# Chat Gbt-4o Recommendations

def arithmetic(a, b, operator):
    operations = {
        "add": lambda a, b: a + b,
        "subtract": lambda a, b: a - b,
        "multiply": lambda a, b: a * b,
        "divide": lambda a, b: a / b if b != 0 else "Division by zero is undefined"
    }
    
    if operator not in operations:
        return "Invalid operator"
    
    return operations[operator](a, b)
