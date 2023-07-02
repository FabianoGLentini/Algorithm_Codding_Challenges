// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//First Pass

function solution(str){
    const arr = []
    
    if(str.length%2){
      str+="_"
    }

    for(i=0; i<str.length/2; i++){
     arr.push(str[i*2]+str[i*2+1])
   }
   return arr
 }

