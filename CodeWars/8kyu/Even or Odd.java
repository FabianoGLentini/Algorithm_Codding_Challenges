// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My Java Solution

public class Kata {
    public static String evenOrOdd(int number) {
        return (number % 2 == 0) ? "Even" : "Odd";
    }
}

// Code Wars Alternatives

public class EvenOrOdd {
    public static String even_or_odd(int number) {
        return (number % 2) != 0 ? "Odd" : "Even";
    }
}

// Or

public class Kata {
    public static String evenOrOdd(int number) {
     if (number%2==0){
       System.out.println("U win!:)");
       return"Even";
     }
      else{
        System.out.println("U lose!:)");
        return "Odd";
      }
    
    }
}