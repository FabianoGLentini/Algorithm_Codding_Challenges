# Count the number of Duplicates
# Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

# Example
# "abcde" -> 0 # no characters repeats more than once
# "aabbcde" -> 2 # 'a' and 'b'
# "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
# "indivisibility" -> 1 # 'i' occurs six times
# "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
# "aA11" -> 2 # 'a' and '1'
# "ABBA" -> 2 # 'A' and 'B' each occur twice


# My Python Solution 

def duplicate_count(text):
    lower_case_text = text.lower()
    duplicate_list = []
    
    for it in lower_case_text:
        if lower_case_text.count(it) > 1 and not it in duplicate_list:
            duplicate_list.append(it)
            
    return len(duplicate_list)
            
# Code Wars Alternative

def duplicate_count(text):
    seen = set()
    dupes = set()
    for char in text:
        char = char.lower()
        if char in seen:
            dupes.add(char)
        seen.add(char)
    return len(dupes)

# Or

def duplicate_count(s):
  return len([c for c in set(s.lower()) if s.lower().count(c)>1])