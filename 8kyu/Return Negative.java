/* 
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
Kata.makeNegative(1);  // return -1
Kata.makeNegative(-5); // return -5
Kata.makeNegative(0);  // return 0
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

*/

// My Java Solution 
public class Kata {

  public static int makeNegative(final int x) {
    
    return - Math.abs(x); 
    
  }
  
}

// Code Wars Alternatives
import static java.lang.Math.abs;

public class Kata {

  public static int makeNegative(final int x) {
    return -abs(x);
  }
  
}

// Or
public class Kata {

  public static int makeNegative(final int x) {
      return (x < 0) ? x : -x; 
  }
  
}

// Chat Gbt-4 Recommendation
public class Kata {

  public static int makeNegative(final int x) {
      return x > 0 ? -x : x;
  }

}
