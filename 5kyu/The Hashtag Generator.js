// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//First Pass

function generateHashtag (str) {
    const capConv = str.split(" ").map(word => {
        if(word === " " || !word) return null
         return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }).join("")
    
    if(!capConv || capConv.length  >= 140) return false
    
    return "#" + capConv
  }

  //My Refractor

  function generateHashtag (str) {
    const cap = str.split(" ").map(word => word === " " || !word ? null : word[0].toUpperCase() + word.slice(1).toLowerCase()).join("")
    
    return !cap || cap.length  >= 140 ? false : "#" + cap
  }


//Code Wars Alternative Refractor

function generateHashtag(str) {
    if (!str.trim()) return false;
  
    const result =
      '#' +
      str
        .split(' ')
        .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
        .join('');
  
    return result.length > 140 ? false : result;
  }


//Code Wars Intriguing alternative

function generateHashtag (str) {

    var hashtag = str.split(' ').reduce(function(tag, word) {
      return tag + word.charAt(0).toUpperCase() + word.substring(1);
    }, '#');
    
    return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
  }