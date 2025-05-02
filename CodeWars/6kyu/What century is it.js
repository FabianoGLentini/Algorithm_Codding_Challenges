// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

//My First Pass 

function whatCentury(year){
    const centTrail = {
      "0" : "th",
      "1" : "st",
      "2" : "nd",
      "3" : "rd",
      "4" : "th",
      "5" : "th",
      "6" : "th",
      "7" : "th",
      "8" : "th",
      "9" : "th"
    }
    
    let cen = String(Math.ceil(year/100))
    
    return cen >= 10 && cen <= 20 ? cen + "th" : cen + centTrail[cen[1]]
  }

  //Code Wars Alternative

  function whatCentury(year){

  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
  
}