// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// My JS Solution

function fizzbuzz(n){
    const fizzbuzzArr = []
    
    for(i = 1; i <= n; i++) {
      if( i % 3 === 0 && i % 5 === 0){
        fizzbuzzArr.push("FizzBuzz")
      } else if ( i % 5 === 0) {
        fizzbuzzArr.push("Buzz")
      } else if ( i% 3 === 0){
        fizzbuzzArr.push("Fizz")
      } else {
        fizzbuzzArr.push(i)
      }
    }
    return fizzbuzzArr
  }

  
  // Code Wars Alternatives

  function fizzbuzz(n) {
	var fizzified = [];
  for (var i = 1; i <= n; i++) {
    var val = '';
    if (i % 3 == 0) val += 'Fizz';
    if (i % 5 == 0) val += 'Buzz';
   	fizzified.push(val || i);
  }
  return fizzified;
}

function fizzify(n) {
	return fizzbuzz(n);
}

// Or

var fizzify = fizzbuzz = function(n)
{
  return Array.apply(null, new Array(n)).map(function(e, i){
    return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
  }); 
}

// Chat Recomendation

function fizzbuzz(n) {
    const fizzbuzzArr = [];
    
    for (let i = 1; i <= n; i++) {
      let output = '';
      
      if (i % 3 === 0) output += 'Fizz';
      if (i % 5 === 0) output += 'Buzz';
      
      fizzbuzzArr.push(output || i);
    }
    
    return fizzbuzzArr;
  }
  
