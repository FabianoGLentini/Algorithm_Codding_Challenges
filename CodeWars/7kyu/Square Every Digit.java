/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
 */

// My Java Solution + documentation
public class SquareDigit {
/**
* Description:
* - Produce concatinated squared digits from consumed integer
*
* @param n Int - integer with 1 to abetrary amount of digits
*
* @return Integer - concatinated squared digits from consumed integer
*
* Example of Use:
* squareDigits(524) = 25416
*/
  public int squareDigits(int n) {
       String strOfN = Integer.toString(n);
       String sqrtEveryDigit = "";
       for(int i = 0 ; i < strOfN.length(); i++){
         int convDig = Character.getNumericValue(strOfN.charAt(i));
         sqrtEveryDigit += convDig*convDig;
       }
    
      return Integer.valueOf(sqrtEveryDigit);
  }
}

// Code Wars Alternatives
public class SquareDigit {

  public int squareDigits(int n) {
  
    String strDigits = String.valueOf(n);    
    String result = "";
    
    for (char c : strDigits.toCharArray()) {
      int digit = Character.digit(c, 10);
      result += digit * digit;
    }
    
    return Integer.parseInt(result);
  }

}

// Or
public class SquareDigit {

  public int squareDigits(int n) {
      if (n < 10) return n * n;
      else {
        int h = squareDigits(n / 10);
        int l = n % 10;
        return Integer.parseInt(h + "" + l * l);
      }
  }

}

// Chat Gbt-4 Recommendations
public class SquareDigit {
    /**
     * Produces a concatenated string of squared digits from the given integer.
     *
     * @param n The input integer containing 1 or more digits.
     * @return An integer representing the concatenated squared digits of the input.
     *         Returns -1 if the input is invalid (e.g., negative or too large).
     *
     * Example:
     * <pre>
     *     squareDigits(524) -> 25416
     * </pre>
     */
    public int squareDigits(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Input must be a non-negative integer.");
        }

        StringBuilder squaredDigits = new StringBuilder();
        String strOfN = Integer.toString(n);

        for (char digitChar : strOfN.toCharArray()) {
            int digit = Character.getNumericValue(digitChar);
            squaredDigits.append(digit * digit);
        }

        try {
            return Integer.parseInt(squaredDigits.toString());
        } catch (NumberFormatException e) {
            throw new ArithmeticException("Result exceeds the range of a valid integer.");
        }
    }
}
