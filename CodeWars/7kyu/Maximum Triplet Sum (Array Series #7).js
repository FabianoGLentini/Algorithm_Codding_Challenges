// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// Input >> Output Examples
// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
// Explanation:
// As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
// Explanation:
// As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
// Explanation:
// As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// First Pass

function maxTriSum(numbers){
  
    const zeroDuplicateArr = numbers.filter((item,index) => numbers.indexOf(item) === index)
  
  
    let max =  Math.min(...zeroDuplicateArr) , preMax = 0, prePreMax = 0

    for(i=0; i<zeroDuplicateArr.length; i++){
      
      if(zeroDuplicateArr[i] > max){
        prePreMax = preMax
        preMax = max
        max = zeroDuplicateArr[i]
        
      }else if(zeroDuplicateArr[i]>preMax){
        prePreMax = preMax
        preMax = zeroDuplicateArr[i]
        
      }else if(zeroDuplicateArr[i]>prePreMax){
        prePreMax =zeroDuplicateArr[i]
      }
    }
    return max + preMax +prePreMax
    
  }

  //Refractor

  function maxTriSum(numbers){
  return [...new Set(numbers)]
    .sort( (a,b) => a - b)
    .slice(-3)
    .reduce( (acc,el) => acc + el);
}