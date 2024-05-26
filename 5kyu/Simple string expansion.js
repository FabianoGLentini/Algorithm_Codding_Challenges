// Consider the following expansion:

// solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
// solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.
// Given a string, return the expansion of that string.

// Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

// More examples in test cases.

// Good luck!

// Please also try Simple time difference


// My Attempt

function solve(str){
      
      const arr = str.split("(").map(el => el.split(")").filter(n => n !== ""))
      
      let ans = "",
          tmp
      
      
      for(i = arr.length-1;i>=0;i--) {
         tmp = arr[i][0].split("").filter(el => Number(el) != el)
        
        let num = arr[i][0].split("").filter(el => Number(el) == el)
        console.log(tmp, num)
        
        ans += tmp.join("") + ans.repeat(num[0]-1)
        
          
      }
            
    return ans
    }



    // Code Wars Solution

    function solve(str){
        while (str.indexOf('(') !== -1) {
          const i1 = str.lastIndexOf('(');
          const i2 = str.indexOf(')', i1);
          const prefix = str[i1 - 1];
          str = str.replace(
            prefix + str.slice(i1, i2 + 1),
            (Number(prefix) ? '' : prefix) + str.slice(i1 + 1, i2).repeat(Number(prefix) || 1),
          );
        }
        return str;
      }