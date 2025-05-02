/*
 Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

 */

// My Java Solution
public class FindOdd {
    public static int findIt(int[] arr) {
     for(int num : arr){
        // Count tracks each time we encounter element == currrent num & resets every iterations
        int count = 0;
          
        // loop through the element to check count of current num within arr
          for(int num2 : arr){
            if(num == num2){
              count += 1;
            }
          }
        
        // check if num apears odd amount of time and return num if true 
        if( count % 2 != 0) {
          return num;
        }
      }
      
      return arr[0];
    }
}

// Code Wars Alternatives
import java.util.HashMap;
import java.util.Map;

public class FindOdd {
	public static int findIt(int[] a) {
  	Map<Integer, Integer> counts = new HashMap<>(a.length);
    for(int i : a) {
      if(!counts.containsKey(i)) counts.put(i, 1);
      else counts.put(i, counts.get(i) + 1);
    }
    for(Map.Entry<Integer, Integer> entry : counts.entrySet()) if(entry.getValue() % 2 == 1) return entry.getKey();
    return 0;
  }
}

// Or
public class FindOdd {
	public static int findIt(int[] A) {
  	int odd=0;
    for (int item: A)
      {
        odd = odd ^ item;// XOR will cancel out everytime you XOR with the same number so 1^1=0 but 1^1^1=1 so every pair should cancel out leaving the odd number out
      }
    
    return odd;
  }
}

// Chat Gbt-4 Recommendations
import java.util.HashMap;

public class FindOdd {
    public static int findIt(int[] arr) {
        // Use XOR operation: numbers appearing an even number of times cancel out
        int result = 0;
        for (int num : arr) {
            result ^= num; // XOR accumulates the unique number
        }
        return result; // The remaining number appears an odd number of times
    }
}
