// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

//My First Pass

function scramble(str1, str2) {
    const obj1 = str1.split("").reduce((obj,it) => {
      obj[it] = obj[it] + 1 || 1
      return obj
    },{})
    
     const obj2 = str2.split("").reduce((obj,it) => {
      obj[it] = obj[it] + 1 || 1
      return obj
    },{})
     
     for( key in obj2){
       if(obj1[key] - obj2[key] < 0 || !obj1[key]) return false
     }
    
    return true
  }

  
//My Refractor

function scramble(str1, str2) {
    const obj1 = strToObj(str1), obj2 = strToObj(str2)

     for( key in obj2){
       if(obj1[key] - obj2[key] < 0 || !obj1[key]) return false
     }
    
    return true

    function strToObj(str) {
        return str.split("").reduce((obj,it) => {
            obj[it] = obj[it] + 1 || 1
            return obj
          },{})
      }
  }

  //Code Wars alternative with my minor adjustments for clarity

  function scramble(str1, str2) {
    const occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});

    return str2.split("").every((character) => --occurences[character] >= 0);
  }

