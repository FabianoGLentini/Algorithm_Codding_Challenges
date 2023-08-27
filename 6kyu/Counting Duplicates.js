// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//First Pass

function duplicateCount(text){
    text = text.toLowerCase().split("")
    const dupCk = new Set(text)
    
    dupCk.forEach(el => {
      let i = text.indexOf(el)
      
      if(i>-1) { text.splice(i,1)}
    })
  
    
    return new Set(text).size
}

//Code Wars Alternative

function duplicateCount(text){
    var lower = text.toLowerCase();
    var count = 0;
    var used = [];
    
    lower.split('').forEach(function(el) {
      if (!used.includes(el) && (lower.split(el).length - 1) > 1) {
        count++;
        used.push(el);
      }
    });
    
    return count;
  }

//My take on the code wars alternative

function duplicateCount(text){
    const lower = text.toLowerCase();
    const used = [];
    let count = 0;
    
    lower.split('').forEach(el => {
      if (!used.includes(el) && (lower.split(el).length - 1) > 1) {
        count++;
        used.push(el);
      }
    });
    
    return count;
  }

