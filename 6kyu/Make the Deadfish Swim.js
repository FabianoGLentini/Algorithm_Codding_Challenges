// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]


// My First Pass

function parse( data ){
    const arr = []

    const ans = data.split("").reduce((acc,c,i) => {
      if(c === "i") acc += 1
      if(c === "d") acc -= 1
      if(c === "s") acc = acc**2
      if(c === "o") arr.push(acc)
      
      return acc
    }, 0)
    
    return arr.length ? arr : ans
  }
    
  // My Refractor

  function parse( data ){
    const arr = []

    return data.split("").reduce((acc,c,i) => {
      if(c === "i") acc++
      if(c === "d") acc--
      if(c === "s") acc = acc**2
      if(c === "o") arr.push(acc)
  
      return arr.length && i === data.length - 1 ? arr : acc
    }, 0)
  }
  

// Code Wars Alternative

const parse = data => {
    const Commands = {
        INCREMENT:  'i',
        DECREMENT:  'd',
        SQUARE:     's',
        OUTPUT:     'o'
    }
  
    var outputs = [],
        value = 0;
    
    data.split('').forEach(command => {
      switch(command) {
        case Commands.INCREMENT:  value++;                   break;
        case Commands.DECREMENT:  value--;                   break;
        case Commands.SQUARE:     value = Math.pow(value, 2);break;
        case Commands.OUTPUT:     outputs.push(value);       break;
      }
    });
    
    return outputs;
  }