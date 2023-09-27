// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats


//First Pass

function countDeafRats(town) {
  
    //need to find where the pad pipper is in the array then we can split the array in two arrays, arrL and arrR
    const [arrL, arrR] = town.split("P")
    console.log(arrL,"and",arrR)
    
    //the symbol sequence on arrL need to be"O~" to indicate a deaf rat. We can use reduce method to count the ammount of deaf rat
  function deafRatsGoingR(str){
    const sL = str.length
  
    for(i=0; i<sL;i++){
      str = str[i] === "~" ? str.replace("~O","R ") : str[i] === "O" ? str.replace("O~","L ") : str
    }
  
    return str.split("").reduce((acc,c) => {
      c === "R" ? acc++ : 0
      return acc
    },0)
  }
    
    //the symbol sequence on arrR need to be"~O" to indicate a deaf rat. We can use reduce method to count the ammount of deaf rat
  function deafRatsGoingL(str){
    const sL = str.length
  
    for(i=0; i<sL;i++){
      str = str[i] === "~" ? str.replace("~O","R ") : str[i] === "O" ? str.replace("O~","L ") : str
    }
  
    return str.split("").reduce((acc,c) => {
      c === "L" ? acc++ : 0
      return acc
    },0)
  }
    
    //we need to insure we know where the P is and thus know which function to use for when we have a single arr
      //we can do so by checking which arr has an empty string
    //we then sum up the two deaf rat values

    console.log([arrL,"and", arrR])
    console.log( deafRatsGoingL(arrR),"and",deafRatsGoingR(arrL))
      return arrL && arrR ?  deafRatsGoingL(arrL) + deafRatsGoingR(arrR) : arrL ? deafRatsGoingL(arrL) : deafRatsGoingR(arrR)

  }

  //My Refractor Pass

  function countDeafRats(town) {
    const [arrL, arrR] = town.split("P")
    
      return arrL && arrR ?  deafRatsGoingL(arrL) + deafRatsGoingR(arrR) : arrL ? deafRatsGoingL(arrL) : deafRatsGoingR(arrR)
      
      
      /*Function creation*/
      function deafRatsGoingR(str){
        const sL = str.length
      
        for(i=0; i<sL;i++){
          str = str[i] === "~" ? str.replace("~O","R ") : str[i] === "O" ? str.replace("O~","L ") : str
        }
      
        return str.split("").reduce((acc,c) => {
          c === "R" ? acc++ : 0
          return acc
        },0)
      }
        
      function deafRatsGoingL(str){
        const sL = str.length
      
        for(i=0; i<sL;i++){
          str = str[i] === "~" ? str.replace("~O","R ") : str[i] === "O" ? str.replace("O~","L ") : str
        }
      
        return str.split("").reduce((acc,c) => {
          c === "L" ? acc++ : 0
          return acc
        },0)
      }
  }

  //My Refractor second Pass

  
  function countDeafRats(town) {
    const [arrL, arrR] = town.split("P")
    
        return arrL && arrR ?  deafRatCount("L", ratDirectionConv(arrL)) + deafRatCount("R", ratDirectionConv(arrR)) : arrL ? deafRatCount("L", ratDirectionConv(arrL)) : deafRatCount("R", ratDirectionConv(arrR))
      
      
      /*Function creations*/

    function ratDirectionConv(str){
    const sL = str.length

        for(i=0; i<sL;i++){
            
            str = str[i] === "~" ? str.replace("~O","R ") : str[i] === "O" ? str.replace("O~","L ") : str
          }
          return str
      }
    
      function deafRatCount(wrongDirection, str){
        return str.split("").reduce((acc,c) => {
            c === wrongDirection ? acc++ : 0
            return acc
          },0)
      }
  }


//Code Wars Solution

var countDeafRats = function(town) {
    let deafs = 0
    let ident = 'O'
    for ( let i = 0; i < town.length; i++){
       if ( town[i] === 'P' ){
        ident =  '~'
       }
       if (town[i] === ident){
         deafs++
       }
       if (town[i] === '~' || town[i] === 'O'){
        i++
       }
     }
    return deafs;
  }