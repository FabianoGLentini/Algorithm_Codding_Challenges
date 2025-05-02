
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// Kata.filterList(List.of(1, 2, "a", "b")) => List.of(1,2)
// Kata.filterList(List.of(1, "a", "b", 0, 15)) => List.of(1,0,15)
// Kata.filterList(List.of(1, 2, "a", "b", "aasf", "1", "123", 123)) => List.of(1, 2, 123)

// My Java Solution

import java.util.List;
import java.util.stream.Collectors;

public class Kata {
  
  public static List<Object> filterList(final List<Object> list) {
    List<Object> filteredList = list.stream().filter(el ->  el instanceof Integer).collect(Collectors.toList());

    return filteredList;
  }
}


// Code Wars Alternative

// import java.util.List;

// interface Kata {
//   static List<Object> filterList(List<Object> list) {
//     return list.stream().filter(Integer.class::isInstance).toList();
//   }
// }