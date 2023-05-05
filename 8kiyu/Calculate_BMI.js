// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


//First Pass

function bmi(weight, height) {
    let bmiCalculation = weight/(height*height)
    return bmiCalculation <= 18.5 ? "Underweight": bmiCalculation <= 25? "Normal" : bmiCalculation <= 30 ? "Overweight" : "Obese"
  }

  // Code wars Recomended best Practice
  
  function bmi(weight, height) {
    var result = weight/Math.pow(height,2) 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
    
  }