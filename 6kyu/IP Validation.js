// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string


//My Attmpt

function isValidIP(str) {
  
    const s = str.split("."), ck = s.map( el => Number(el))
    
    
    console.log(ck, s, str)
    if(ck.length !== 4 || ck.every( el => !(el >= 0))) return false
    
    
    for(i=0; i<ck.length; i++){
      if(ck[i] > 255 || ck[i] < 0) return false
      if(ck[i] < 10 && s[i].length > 1) return false
      if(!(ck[i] == s[i])) return false
    }
    
    
    
    return true
  }

//Code Wars Solution

function isValidIP(str) {
    const octets = str.split('.')							// Split into octets
    return (octets.length === 4) &&						// Ensure str has exactly 4 octets
        octets.reduce((acc, octet) =>						// Check all octets
          (acc === true) &&												// Ensure prior octets okay
           (String(Number(octet)) === octet) &&		// Ensure octet has nothing funky like spaces, leading 0's, ...
            (Number(octet) >= 0) &&									// Ensure octet is 0 or more
             (Number(octet) <= 255)									// Ensure octet is 255 or less
        , true)
  }

  //Or

  function isValidIP(str) {
    return str.split('.').filter(function(v) {return +v <= 255 && +v >= 0 && v.length == String(+v).length;}).length == 4;
  }