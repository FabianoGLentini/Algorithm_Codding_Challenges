// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 1+7+12=201+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

// My Java Solution
public class Positive{

    public static int sum(int[] arr){
      
      int sumPos = 0;
        
      for(int i = 0; i < arr.length; i++){
        
        // Ck el is positive if yes sum with sumPos
        if(arr[i] > 0){
          sumPos += arr[i];
        }
      }
      
      return sumPos;
    }
}

// Code Wars Alternative
public class Positive{
    public static int sum(int[] arr){
        int result = 0;
        for (int i : arr) {
            if (i > 0) {
                result += i;
            }
        }
        return result;
    }
}

// Or

/*import java.util.Arrays;*/
public class Positive{
    public static int sum(int[] arr){
        return Arrays.stream(arr).filter(v -> v > 0).sum();
    }
}