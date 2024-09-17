# The binary number returned should be a string.

# Examples:(Input1, Input2 --> Output (explanation)))

# 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
# 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


# My Python Solution 

def add_binary(a,b):
    return bin(a+b)[2:]

# Code Wars Alternatives

def add_binary(a,b):
    return '{0:b}'.format(a + b)

# Or 

def add_binary(a, b):
    return format(a + b, 'b')