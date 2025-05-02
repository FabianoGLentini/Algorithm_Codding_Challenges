// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".


// My Attempt to solve the Challenge

function revrot(str, sz) {
    console.log(str,sz)
    
    if(sz<=0 || !str || sz > str.length) return ""
    
    let arr = []
    
    do { arr.push(str.substring(0,sz))}
    while((str = str.substring(sz,str.length)) != "")
    let ck = arr
      
    arr = arr.map(chunk => chunk.split(""))
    console.log(arr)
      
    return arr.map((chunk,i)=> ck[i]%2===0 ? chunk.reverse() : chunk.unshift(chunk.pop())).join("")
  
  }


// Code Wars solution 

function revrot(str, sz) {
    if (sz <= 0 || !str || sz > str.length) return '';    
      
    const sumCubes = chunk => chunk.split('').reduce((sum, digit) => sum += digit**3, 0);
    const reverse = chunk => chunk.split('').reverse().join('');
    const rotate = chunk => chunk.slice(1) + chunk.slice(0, 1);
    
    const chunks = [];
    
    for (let i = 0; i < str.length; i += sz) {
      let chunk = str.slice(i, i + sz);
      
      if (chunk.length < sz) continue;
      
      chunk = sumCubes(chunk) % 2 
        ? rotate(chunk)   
        : reverse(chunk);
      
      chunks.push(chunk)
    }
    
    return chunks.join('')
}


    // My Breakdown of the given code

    function revrot(str, sz) {
        if (sz <= 0 || !str || sz > str.length) return '';    // set up indicated condition
         
        // Instead of trying to do all the steps at once they split each aspects of the problem into a function that would be called oponed when needed
        const sumCubes = chunk => chunk.split('').reduce((sum, digit) => sum += digit**3, 0); //Create a function that will be called oppon to find the sum of the digit cubed
        const reverse = chunk => chunk.split('').reverse().join(''); // create function that will be called oppon to reverse each chunk if the sumCubes of said chunk results into even value
        const rotate = chunk => chunk.slice(1) + chunk.slice(0, 1); // create function tthat will be called oppon if sumCubes value of said chunk is odd, which will rotate the chunk
        
        const chunks = []; // creating array to contain the chunks we will receive
        
        for (let i = 0; i < str.length; i += sz) { // for loop that will create the chunks based on the indicated sz
          let chunk = str.slice(i, i + sz); //every loop we slice based on indicate sz and create a new chunk that we will push in our arr after going through the hole process of checking said chunck and treating it appropriatly
          
          if (chunk.length < sz) continue; // check if chunk length samller the sz we skip the resst of this iteration's loop and proceed to the next iteration
          
          chunk = sumCubes(chunk) % 2 //if the if statement isent true we proceed to create our chunk, calling oppon the sumCubes function to check if the sumcube is even or odd
            ? rotate(chunk)   // if even we call opon the rotate to return to us the appropriate chunk rotated
            : reverse(chunk); // if not we call opon the reverse function to apply the alternate option to the chunk
          
          chunks.push(chunk) // our newly created chunk will then be pushed into our chunks array
        }
        
        return chunks.join('') // Finally we join the chunks together and return the created value
    }

