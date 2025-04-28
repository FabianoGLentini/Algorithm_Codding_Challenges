/*
 Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321


 */

// My Java Solution
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

public class DescendingOrder {
  
  public static int sortDesc(final int num) {
    List<Integer> numList = new ArrayList<Integer>();
    int number = num;
    int i = 0;
    
    while(number > 0 ){
      numList.add(number%10); // first digit
      number = number/10; // reduce num
      
      
      i += 1; // index pos
      
    }
    
    Collections.sort(numList);
    
    int result = 0;
    
    for(i=0; i< numList.size(); i++){
      result += numList.get(i)*Math.pow(10,i);
    }
    
    return result;
    
  }
}

// Code Wars Alternatives
import java.util.Arrays;
import java.util.Collections;

public class DescendingOrder {
    public static int sortDesc(final int num) {
        String[] array = String.valueOf(num).split("");
        Arrays.sort(array, Collections.reverseOrder());
        return Integer.valueOf(String.join("", array));
    }
}

// Or
import java.util.*;

public class DescendingOrder {
  public static int sortDesc(final int num) {
    String[] numbers = (Integer.toString(Integer.valueOf(num))).split("");
    Arrays.sort(numbers);
    
    String result = "";
    
    for(String s : numbers)
    {
      result = s + result;
    }
    
    return Integer.parseInt(result);
  }
}

// Chat Gbt-4 Recomendations 
import java.util.Arrays;
import java.util.stream.Collectors;

public class DescendingOrder {

    public static int sortDesc(final int num) {
        if (num < 0) {
            throw new IllegalArgumentException("Input number must be non-negative");
        }

        // Convert the number to a sorted string in descending order
        String sortedStr = Integer.toString(num)
                .chars()
                .mapToObj(c -> (char) c)
                .sorted((a, b) -> Character.compare(b, a)) // Sort descending
                .map(String::valueOf)
                .collect(Collectors.joining());

        // Convert the sorted string back to an integer
        return Integer.parseInt(sortedStr);
    }
}
