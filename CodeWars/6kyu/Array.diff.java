

// My Java Solution

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.ArrayList;

// File description:
// - will remove all copies from arr a of any values 
// that are present in arr b
private class Kata {

    // EXPECT: a[] withou any elements from b[]
    public static int[] arrayDiff(int[] a, int[] b) {
        HashSet<Integer> exclusionList;
        List<Integer> filteredArrayList = new ArrayList();
        int[] filteredArray;

        exclusionList = checkListSet(b);

        for (int el : a) {
            if (!exclusionList.contains(el)) {
                filteredArrayList.add(el);
            }

        }

        filteredArray = convertHashToPrimArr(filteredArrayList);

        return filteredArray;
    }

    // EXPECT: converts given List<Integer> to int[]
    public static int[] convertHashToPrimArr(List<Integer> intList) {
        int size = intList.size();
        int[] convertedToArr = new int[size];

        for (int i = 0; i < size; i++) {
            convertedToArr[i] = intList.get(i);
        }

        return convertedToArr;

    }

    // EXPECT: converst int[] to HashSet<Integer>
    public static HashSet<Integer> checkListSet(int[] array) {
        HashSet<Integer> checkListSet = new HashSet<>();

        for (int el : array) {
            checkListSet.add(el);
        }

        return checkListSet;
    }

}


// Code Wars Alternatives

// import java.util.Arrays;
// import java.util.List;
// import java.util.stream.Collectors;

// public class Kata2 {
//     public static int[] arrayDiff(int[] a, int[] b) {
//         List<Integer> listA = Arrays.stream(a).boxed().collect(Collectors.toList());
//         List<Integer> listB = Arrays.stream(b).boxed().collect(Collectors.toList());
//         listA.removeAll(listB);
//         return listA.stream().mapToInt(e -> e).toArray();
//     }
// }



// Chat GBT Recommendation

// import java.util.*;
// import java.util.stream.Collectors;

// public class Kata {

//     // Removes elements from `a` that exist in `b`
//     public static int[] arrayDiff(int[] a, int[] b) {
//         Set<Integer> exclusionSet = Arrays.stream(b).boxed().collect(Collectors.toSet());

//         // Filter and convert to array in one step using streams
//         return Arrays.stream(a)
//                      .filter(num -> !exclusionSet.contains(num))
//                      .toArray();
//     }
// }
