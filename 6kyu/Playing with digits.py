"""
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

(a p +b p+1 +c p+2 +d p+3+...)=n∗k
If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.

Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51"""

import unittest

# My Python Solution

def dig_pow(n, p):
    # your code
    sum = 0
    mutateN = n
    startP = len(str(n)) + p  -1
    
    print(startP)

    while mutateN > 0 :
        raisedN = mutateN % 10
        mutateN -= raisedN
        mutateN = mutateN/10
        
        print(sum, startP, raisedN, raisedN ** startP)
        
        sum += raisedN ** startP
        startP -= 1
        
        
    

    return sum/n if sum/n % 1 == 0 else -1


# My Quick Refractored Code

def dig_pow(n, p):
    sum = 0
    mutateN = n
    p += len(str(n))  -1
    
    while mutateN > 0 :
        raisedN = mutateN % 10
        mutateN -= raisedN
        mutateN = mutateN/10
                
        sum += raisedN ** p
        p -= 1
        
        
    result = sum/n

    return result if result % 1 == 0 else -1

# test cases
def test_pow():
    # n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1?
    assert dig_pow(89, 1) == 1

    # n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k
    assert dig_pow(92, 1) == -1

    # n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2F
    assert dig_pow(695, 2) == 2

    # n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
    assert dig_pow(46288, 3) == 51

# Code Wars Alternatives

def dig_pow(n, p):
  s = 0
  for i,c in enumerate(str(n)):
     s += pow(int(c),p+i)
  return s/n if s%n==0 else -1

# Or

def dig_pow(n, p):
    sum = 0
    for c in str(n):
        sum += int(c) ** p
        p += 1
    if sum % n == 0:
        return sum / n
    else:
        return -1
    
# GPT Review and Recommendation With my Added notes

def dig_pow(n, p):
    digits = [int(d) for d in str(n)] # creates arr of digits
    power_sum = sum(d ** (p + i) for i, d in enumerate(digits)) # creates power sum straig from digits and i pos + p 
    return power_sum // n if power_sum % n == 0 else -1



