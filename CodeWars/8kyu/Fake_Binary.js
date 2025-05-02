// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



//First Pass

function fakeBin(x){
    let convert = x.replaceAll('1', '0')
                   .replaceAll('2','0')
                  .replaceAll('3','0')
                  .replaceAll('4','0')
                  .replaceAll('5','1')
                  .replaceAll('6','1')
                 .replaceAll('7','1')
                 .replaceAll('8','1')
                  .replaceAll('9','1')
    return convert
}

//Refractor

function fakeBin(x){
    return x.split('').map(n=> n < 5 ? 0 : 1).join('')
  }