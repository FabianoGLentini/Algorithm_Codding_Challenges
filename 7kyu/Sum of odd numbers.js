// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//First Pass ... I had overly complicated it creating teh piramid when it wasent needed

function rowSumOddNumbers(n) {
    const arr = []
    let tmp
    
      for(i=0; i<n; i++){
      arr[i] = []
      
        for(j=0; j<=i; j++){
            if(i == 0){
                arr[i].push(1)
              
            }else if(j - i == -i){
                tmp = Math.max(...arr[i-1]) + 2

                arr[i].push(tmp)
            }else{
                tmp = (!!arr[i][j-1] ? arr[i][j-1] : 0) +2
          
                arr[i].push(tmp)
            }
      }
    }
    
    return arr[n-1].reduce((acc,c) => acc + c, 0)
  }

//Code wars solution with breakdown and explination

function rowSumOddNumbers(n)
{
  /* The rows' start numbers are Hogben's centered polygonal numbers:
     1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
     <https://oeis.org/A002061>
     
     The sum of one row is given by:
     s[n] = n^2 + n(b[n] - 1).
     <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>
     
     Inline b[n]:
     s[n] = n^2 + n(n^2 - n + 1 - 1)
          = n^2 + n(n^2 - n)
          = n^2 + n^3 - n^2
          = n^3
     ... oh. */
  return n * n * n;
}