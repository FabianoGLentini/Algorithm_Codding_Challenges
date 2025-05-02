#Trolls are attacking your comment section!

#A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

#Your task is to write a function that takes a string and return a new string with all vowels removed.

#For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

#Note: for this kata y isn't considered a vowel.


# My Python Solution

def disemvowel(str):
    vowels =  "aeoiuAEOIU"
    filtered_vowels = ""
    
    for el in str:
        if el not in vowels:
            filtered_vowels += el
            
    return filtered_vowels
            

# Code Wars Alternatives

def disemvowel(s):
    for i in "aeiouAEIOU":
        s = s.replace(i,'')
    return s
    
    
# Or

def disemvowel(string):
    return "".join(c for c in string if c.lower() not in "aeiou") 