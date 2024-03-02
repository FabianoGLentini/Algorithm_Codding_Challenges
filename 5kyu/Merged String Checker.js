// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 should be in the same order as in s.

// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

// For example:

// 'codewars' is a merge from 'cdw' and 'oears':

//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears

//My Attempt

function isMerge(s, part1, part2) {
    let arr = s.split(""),
          ck = part1 + part2,
          p1 = part1.split(""),
          p2 = part2.split(""),
        ans = true
    
    if(!arr.every(el => ck.includes(el))) return false
    
    p1 = p1.forEach((el, i) => {
      
      if(arr.includes(el)) {
        p1[i] = arr.indexOf(el)
        arr[arr.indexOf(el)] = 0
      }
      
      
      ans = p1.every((el,i) => p1[i-1] ? p1[i-1] < el : true)
      
       console.log(p1,ans)
      
      
    })
    console.log(ans)
    
    
    if(ans === false) return 
    
      p2 = p2.forEach((el, i) => {
      
      if(arr.includes(el)) {
        p2[i] = arr.indexOf(el)
        arr[arr.indexOf(el)] = 0
      }
      
      
      ans = p2.every((el,i) => p2[i-1] ? p2[i-1] < el : true)
      
    })
    
    
    console.log(ans)
    
    return ans
  }

  //Code Wars Solution

  function isMerge(s, part1, part2) {
    return !s ? !(part1 || part2) :
      s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
      s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
  }


  //Code Wars Breakdown 

  function isMerge(s, part1, part2) { // Use recursion of function isMerge to narrow down to answer

    // Base case: if s is empty, check if both part1 and part2 are also empty.
    // This is because if s is successfully formed by merging part1 and part2,
    // all characters from part1 and part2 should have been used in the same order.
    return !s ? !(part1 || part2) :

      // Recursive check: if the first character of s matches the first character of part1,
      // continue checking the rest of s with the first character of part1 removed.
      // This is to ensure characters from part1 are used in the correct order in s.
      (s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2)) ||

      // Alternatively, if the first character of s matches the first character of part2,
      // continue checking the rest of s with the first character of part2 removed.
      // This ensures characters from part2 are also used in the correct order in s.
      (s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1)));
  }

  /*Checking if s is empty (!s) at the beginning: This is essential for determining if we've successfully merged all characters from part1 and part2 into s. If s is empty and part1 and part2 are also empty, it means the merge was possible and complete, hence returning true. If s is empty but part1 or part2 still has characters, it means not all characters were used in the merge, indicating a failure, so it returns false.

Comparing the first character of s with part1 and part2: This comparison is crucial to ensure the order of characters from part1 and part2 is preserved in s. If the current character in s matches the first character in part1, the algorithm recursively checks if the rest of s can be formed from the remaining part1 (minus the matched character) and the whole part2. The same logic applies to part2. This step essentially tries all possible ways to merge part1 and part2 into s, maintaining the order.

Using logical operators (&& and ||): The && operator is used to ensure the recursive call is only made when a character match is found, which helps in proceeding with valid merge paths. The || operator allows the algorithm to consider both possibilities: whether the current character in s came from part1 or part2. It essentially explores all paths to find a successful merge that uses all characters in s, part1, and part2 in their respective orders.

This approach allows the algorithm to exhaustively and recursively explore all possible ways to interleave part1 and part2 into s, adhering to the order constraints, until it either finds a valid merge or determines that no such merge is possible.*/



//Code Wars Alternative

function isMerge(s, part1, part2) {
    if (s === "" && part1 === "" && part2 === "") return true;
  
    if (s !== ""){
        if (s[0] === part1[0] && part1[0] === part2[0]){
        // we make two branches of an recursion and get OR of the answers
            return (isMerge(s.slice(1), part1.slice(1), part2) || isMerge(s.slice(1), part1, part2.slice(1)));
        } else if (s[0] === part1[0]){
            return isMerge(s.slice(1), part1.slice(1), part2);
        } else if (s[0] === part2[0]){
            return isMerge(s.slice(1), part1, part2.slice(1));
        }
    }
    
      return false;
  }