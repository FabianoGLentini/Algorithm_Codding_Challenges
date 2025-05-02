// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

// My Attempt to solve the challenge could only get 10 out of 23 successful outputs

function solution(text, markers) {
    // create array to contain the new text as str and an array to hold the plitted version of the text
    const input = text.split("\n")
    
      return input.map((word, i) => strip(word, markers, i)).join(" ")
    
    
    function strip(word, markers, index) {
      let curr,
          str = ""
      
      for(i=0;i<word.length;i++) {
        curr = word[i] == String.fromCharCode(92) || markers.includes(text[i]) ? word[i] : curr
        
        if(markers.includes(curr)) {
          str += ""
        }else {
          str += word[i]
        }
      }
      
      return index === 0 ? str.trimEnd() : "\n" + str.trim()
    }
  }

  // Code Wars solution 

  function solution(input, markers) {
    const rowMarkersPosition = (row) => markers
      .map(marker => row.indexOf(marker))
      .filter(index => index >= 0);
  
    return input
       .split("\n")
       .map(row => row.slice(0, Math.min(...rowMarkersPosition(row))).trimEnd())
       .join("\n");
  };

    // My breackdown of the code wars solution

    function solution(input, markers) {
        const rowMarkersPosition = (row) => markers    //creating a function called rowMarkersPosition with parameter of row, taht executes a map of the markers array
          .map(marker => row.indexOf(marker))         //the map keyword start here and takes the current marker as the parameter and we then return the indexOf said marker in current row, making the markers an array of index values
          .filter(index => index >= 0);              //when then filter the mapped markers array to include elements that are a greater or equal to 0
      
        return input 
           .split("\n")                                                                        //We return the input that will be split at each "\n" points creating for this case different rows
           .map(row => row.slice(0, Math.min(...rowMarkersPosition(row))).trimEnd())          //We then map the split input taking in each row and returning the slice version of it starting from 0 and ending based on the Math min result of our created function from prior of  rowMarkersPosition with the input row. At the end we trim the end of each row to remove the spaces that trail on the tail of the row string
           .join("\n");                                                                      // We then join the rows back together at the "\n" poinnts to return are strip string 
      };

    //My Adjustment of the code wars solution

    function solution(text, markers) {
        return text
            .split("\n")
            .map(row => row.slice(0, Math.min(... rowMarkersPosition(row))).trimEnd())
            .join("\n")

            function rowMarkersPosition (row) {
                return markers
                    .map(marker => row.indexOf(marker))
                    .filter(index => index >= 0);
            }
        
    }



  // Alternative Solution from youtube with my own tweaks and adjustment, video link : https://www.youtube.com/watch?v=Xo2p3m70-sQ no longer works but the explination is solid

  function solution(input, markers) {
    let arr = input.split("\n")


    for(i=0;i<markers.length; i++) {
        arr = arr.map(el => {
            let ind = el.indexOf(markers[i])

            if(ind !== -1) return el.substring(0, ind)
            else return el.replace(/\s*$/,"")
        })
    }

    return arr.join("\n").trim()
  }