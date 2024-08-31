# Your task is to create a function that does four basic mathematical operations.

# The function should take three arguments - operation(string/char), value1(number), value2(number).
# The function should return result of numbers after applying the chosen operation.

# Examples(Operator, value1, value2) --> output
# ('+', 4, 7) --> 11
# ('-', 15, 18) --> -3
# ('*', 5, 5) --> 25
# ('/', 49, 7) --> 7

# My Python Solution 

def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 + value2
    
    elif operator == "-":
        return value1 - value2
    
    elif operator == "*":
        return value1 * value2
    
    elif operator == "/":
        return value1 / value2


# Code Wars Alternative

def basic_op(operator, value1, value2):
    return eval(str(value1) + operator + str(value2))

# Chat Recomendation

def basic_op(operator, value1, value2):
    operations = {
        "+": value1 + value2,
        "-": value1 - value2,
        "*": value1 * value2,
        "/": value1 / value2 if value2 != 0 else "Error: Division by zero"
    }
    
    return operations.get(operator, "Error: Unsupported operator")
