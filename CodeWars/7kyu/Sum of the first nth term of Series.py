'''
Task
Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

You will need to figure out the rule of the series to complete this.

Rules
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return "0.00".

You will only be given Natural Numbers as arguments.

Examples (Input --> Output)
n
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
'''

# My Python Solution
def series_sum(n):
    i = n-1 
    nth = 0
    n = 0
    
    while (i >= nth):
        n += 1/(1 + 3*nth)
        
        nth += 1
    
    return "{0:.2f}".format(n)

# Code Wars Alternative Solution
def series_sum(n):
    return '{:.2f}'.format(sum(1.0/(3 * i + 1) for i in range(n)))

# Or
def series_sum(n):
    sum = 0.0
    for i in range(0,n):
        sum += 1 / (1 + 3 * float(i))
    return '%.2f' % sum

#  Chat Gbt-4 Recommendation
def series_sum(n):
    """Calculate the sum of the series: 1/(1 + 3*i) for i in range(n)."""
    total = 0  # Accumulator for the series sum
    
    for i in range(n):
        total += 1 / (1 + 3 * i)
    
    # Return the result rounded to two decimal places
    return round(total, 2)
