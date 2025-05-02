# Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

# Examples
# "This is an example!" ==> "sihT si na !elpmaxe"
# "double  spaces"      ==> "elbuod  secaps"


# My Python Solution

def reverse_words(text):
    text_iter = iter((text).split(" "))
    reverse_list = []
    
    for word in text_iter:
        reverse_word = []
        
        for ch in word:
            reverse_word.insert(0, ch)
        
        reverse_list.append("".join(reverse_word))
        
    return " ".join(reverse_list)

# Code Wars Alternatives

def reverse_words(str):
    return ' '.join(s[::-1] for s in str.split(' '))

# Or

def reverse_words(str):
  newStr = []
  for i in str.split(' '):
      newStr.append(i[::-1])
  return ' '.join(newStr)