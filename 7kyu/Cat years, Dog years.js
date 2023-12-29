// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


//My First Pass

var humanYearsCatYearsDogYears = function(humanYears) {
    const dogYears = humanYears >=3 ? 15 + 9 + (5*(humanYears-2)) 
                    : humanYears === 2 ? 15 + 9 
                    : humanYears === 1 ? 15 : 0,
          
          catYears = humanYears >=3 ? 15 + 9 + (4*(humanYears-2)) 
                    : humanYears === 2 ? 15 + 9 
                    : humanYears === 1 ? 15 : 0
    
    return [humanYears,catYears,dogYears]
  }

// Code Wars Alternative

  //#1

  var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }

  //#2

  const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15;
        dogYears += 15;
      }
      else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      }
      else {
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears,catYears,dogYears];
  }