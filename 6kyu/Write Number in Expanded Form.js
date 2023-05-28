// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

//First Pass

function expandedForm(num) {
    const numArr = num.toString().split("")

    let expandForm = numArr.map((element,indexDigit) => {
     let digitPosition = "1"
   
     for(i=0; i< (numArr.length-indexDigit -1); i++){
       digitPosition += "0"   
     }

     return (element * digitPosition).toString()

    }).filter(digitNum => digitNum !== "0").join(" ").replaceAll(" "," + ")
    
    return expandForm
}

//Code Wars suggested Refractor

function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
  }

