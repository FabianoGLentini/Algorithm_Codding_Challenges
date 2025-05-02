// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

// My First Pass

function countSmileys(arr) {
    const smile = arr.filter(eyes => eyes[0].includes(";") || eyes[0].includes(":"))
                      .filter(mouth => mouth[mouth.length-1].includes("D") || mouth[mouth.length-1].includes(")"))
                      .filter(face => face.length > 2 ? face[1].includes("-") || face[1].includes("~") : face)
                      .filter(face=>face.length < 4 )
    
    return smile.length
  }


// Code Wars Alternative

function countSmileys(arr) {
    var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    var count = 0;
    
    for (var i=0; i<arr.length; i++){
      for (var j=0; j<smileys.length; j++){
        if (arr[i]===smileys[j]){
          count++;
        }
      }
      }
    return count;
    }

    // Or

    function countSmileys(arr) {
        return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
      }