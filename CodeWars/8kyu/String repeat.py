# Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

# Examples (input -> output)
# 6, "I"     -> "IIIIII"
# 5, "Hello" -> "HelloHelloHelloHelloHello"


# My Python Solution

def repeat_str(repeat, string):
    return "".join(string for i in range(repeat))

# Code Wars Alternatives

def repeat_str(repeat, string):
    return repeat * string

# Or

def repeat_str(repeat, string):
    solution = ""
    for i in range(repeat):
        solution += string
    return solution