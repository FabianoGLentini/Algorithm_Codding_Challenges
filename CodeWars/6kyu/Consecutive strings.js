// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


// My JS Solution

function longestConsec(strarr, k) {
    if(k > strarr.length) return ""
      const consecutiveString = []
      let longestStr = ""
      
      for(i=0;i<strarr.length;i++){
        consecutiveString[i] = ""
        
        for(j=i;j<k+i;j++){
          typeof strarr[j] === "string" ? consecutiveString[i] += strarr[j] : ""
        }
      }
    
    consecutiveString.forEach(str => {
      if(str.length > longestStr.length) longestStr = str
    })
    
    return longestStr
  }

  // Code Wars Alternatives

  function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
        var tempArray = strarr.slice(i,i+k);
        var tempStr = tempArray.join("");
        if(tempStr.length > longest.length){
            longest = tempStr;
        }
    }
    return longest;
}

// Or

function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
      return "";
    }
    
    return strarr
    .map((value, index) => (
      strarr.slice(index, index+k).join('')
    ))
    .reduce((longest, current) => current.length > longest.length ? current : longest)
    
}