# In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

# Examples
# high_and_low("1 2 3 4 5")  # return "5 1"
# high_and_low("1 2 -3 4 5") # return "5 -3"
# high_and_low("1 9 3 4 -5") # return "9 -5"
# Notes
# All numbers are valid Int32, no need to validate them.
# There will always be at least one number in the input string.
# Output string must be two numbers separated by a single space, and highest number is first.


# My Code War Solution

def high_and_low(numbers):
    # Create var called int_list, that has numbers as a list of str numbers
    str_list = numbers.split()
    
    # Create var called int_list, which converts str_list elements into integers and sort smallest to largest
    int_list = sorted([eval(i) for i in str_list])
    
    # Create var called smallest_num, that will hold the smallest int_list val at index position 1 and turns it into string
    
    smallest_num =  str(int_list[0])
    
    # Create var called largest_num, takes the largest value at the -1 index position of int_list and turns it into string
    largest_num = str(int_list[-1])
        
    # Return the string of largest_num + " " + smallest_num
    return largest_num + " " + smallest_num
    
 
# My Refractored Code Wars Solution 

def high_and_low(numbers):
    str_list = numbers.split()
    int_list = sorted([eval(i) for i in str_list])
    
    smallest_num =  str(int_list[0])
    largest_num = str(int_list[-1])
        
    return largest_num + " " + smallest_num
    
 
# Code Wars Alternatives

def high_and_low(numbers): #z.
    nn = [int(s) for s in numbers.split(" ")]
    return "%i %i" % (max(nn),min(nn))


# Or

def high_and_low(numbers):
  numbers = [int(c) for c in numbers.split(' ')]
  return f"{max(numbers)} {min(numbers)}"