// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//First Pass

function validatePIN (pin) {
    const pinChecker = pin.split("").filter(element => "0123456789".includes(element)).length
    const pinLength = pin.split("").length
    
    if(pinChecker !== pinLength){
      return false
    }
    
    return pinLength === 4 || pinLength === 6
  }

//Code wars alternative

function validatePIN (pin) {
      var n = pin.length;
    if( n != 4 && n != 6)
            return false;
    for (var i in pin)
            if (pin[i] > '9' || pin[i] < '0')
                return false;
    return true;
  }