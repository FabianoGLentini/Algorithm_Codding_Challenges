// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];
// your function should return true.

// Notes:

// The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
// The input array will always be valid and formatted as in the example above.

//First Pass

function isSameLanguage(list) {
    //take one of the obj language value and check with all others to see if they are all equal to eachother\
    //create arr with only language 
    const arrLanguage = []
          
    list.forEach(el=> arrLanguage.push(el.language))
    
    //filter throuhg arr remove any none same as [0] language value
    const arr = arrLanguage.filter(lang=> lang === list[0].language)
    
    //check true or false if list.length is same as arr.length
    
    return arr.length === list.length ? true : false
  }
  
  //My Refractor
  
  function isSameLanguage(list) {
  
    const arr = list.filter(dev => dev.language === list[0].language)
  
    return arr.length === list.length
  }
  
  //Code wars suggested refractor
  
  function isSameLanguage(list) {
    return list.every(e => e.language === list[0].language);
  }