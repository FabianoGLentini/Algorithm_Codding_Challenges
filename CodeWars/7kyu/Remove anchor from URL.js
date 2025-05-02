// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// My First Pass

function removeUrlAnchor(url){
    const sym = ["#"].map( mark => url.indexOf(mark)).filter(i => i >= 0)
    
    return url.slice(0, Math.min(... sym))
  }

// Code Wars Alternative

function removeUrlAnchor(url){
    return url.split('#')[0];
  }