# Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

# Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

# If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

# Examples
# "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
# "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
# ""  -->  ""


# My Python Solution

def order(sentence):
    str_list = sentence.split(" ")
    ordered_sentence = []
    interation = 0
    
    
    while interation <= len(str_list):
        interation += 1
        for word in str_list:
            if str(interation) in word:
                ordered_sentence.insert(interation, word)
        
            
    return " ".join(ordered_sentence)

# My Refractored Soltuion

def order(sentence):
    str_list = sentence.split(" ")
    ordered_sentence = []
    interation = 0
    
    
    while interation <= len(str_list):
        interation += 1
        [ordered_sentence.insert(interation, word) for word in str_list if str(interation) in word]

        
            
    return " ".join(ordered_sentence)


# Code Wars Alternatives

def order(words):
  return ' '.join(sorted(words.split(), key=lambda w:sorted(w)))

# Or 

def order(sentence):
    if not sentence:
        return ""
    result = []    #the list that will eventually become our setence
      
    split_up = sentence.split() #the original sentence turned into a list
  
    for i in range(1,10):
        for item in split_up:
            if str(i) in item:
                 result.append(item)    #adds them in numerical order since it cycles through i first
  
    return " ".join(result)
