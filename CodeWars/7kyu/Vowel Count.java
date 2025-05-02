/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// My Java Solution
public class Vowels {

  public static int getCount(String str) {
    
    String vowels = "aeiou";
    int count = 0;
    
    for(int i = 0; i<str.length(); i++){
      char ch = str.charAt(i);
      
      
      if(vowels.indexOf(ch) >= 0){
        count += 1;
      }
    }
    
    return count;
  }

}

// Code Wars Alternative
public class Vowels {

  public static int getCount(String str) {
    int vowelsCount = 0;
    
    for(char c : str.toCharArray())
      vowelsCount += (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') ? 1 : 0;
    
    return vowelsCount;
  }

}

// Or

public class Vowels {

  public static int getCount(String str) {
    return (int) str.chars().filter(c -> "aeiou".indexOf(c) >= 0).count();
  }

}

// Chat Gbt-4 Recommendations
import java.util.Set;

public class Vowels {

  public static int getCount(String str) {
    if (str == null || str.isEmpty()) {
      return 0;
    }

    Set<Character> vowels = Set.of('a', 'e', 'i', 'o', 'u');
    return (int) str.toLowerCase()
                   .chars()
                   .filter(ch -> vowels.contains((char) ch))
                   .count();
  }
}
