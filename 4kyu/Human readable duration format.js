// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.



//My First Pass


function formatDuration (seconds) {
    // check if seconds is 0 if yes we just need to return string "now"
    if(!seconds) return "now"
    
    // need to find our var for year, days, hours, minute and seconds
      // maybe I can create an obj to hold the values? Might make it cleaner for when we check if a value exist or not?
    const values = {year : Math.floor(seconds / 31_536_000),
                    day : Math.floor(seconds / 86_400) % 365,
                    hour : Math.floor(seconds / 3_600) % 24,
                    minute : Math.floor(seconds / 60) % 60,
                    second : seconds % 60}
    
    //creeating obj from result to filter out values to include properties that have values and adjust propertyu name if value exceeds 1 to be in pluriaal
    
    const obj = {}
    
    for(key in values){
      if(values[key]) {
        values[key] === 1 ? obj[key] = values[key] : obj[`${key}s`] = values[key]
        }
    }
    
    
    // we will need to check what var has a value and return the appropriate strings accordingly
      // we must order acending from largest time valuye for example year > hour
      // if more then  1 value the smallest value need "and" before it the rest will have ","
    let ans = "", i = 1, t = Object.keys(obj).length
      
    for(key in obj){
      if(t >= 2 && i === t){
        ans += ` and ${obj[key]} ${key}`
      } else if(t >= 3 && i !== t - 1){
        ans += `${obj[key]} ${key}, `
      }else{
        ans += `${obj[key]} ${key}`
      }
      i++
    }
    
    return ans
  }


// My Refractor


function formatDuration (seconds) {
    if(!seconds) return "now"
    
    const calTimeValues = {
                    year : Math.floor(seconds / 31_536_000),
                    day : Math.floor(seconds / 86_400) % 365,
                    hour : Math.floor(seconds / 3_600) % 24,
                    minute : Math.floor(seconds / 60) % 60,
                    second : seconds % 60
                }
    
    
    const adjustedAndFilteredTimes = {}
    
    for(key in calTimeValues){
      if(calTimeValues[key]) {
        calTimeValues[key] === 1 ? adjustedAndFilteredTimes[key] = calTimeValues[key] : adjustedAndFilteredTimes[`${key}s`] = calTimeValues[key]
        }
    }
    
    let ans = "", i = 1, t = Object.keys(adjustedAndFilteredTimes).length
      
    for(key in adjustedAndFilteredTimes){
      if(t >= 2 && i === t){
        ans += ` and ${adjustedAndFilteredTimes[key]} ${key}`
      } else if(t >= 3 && i !== t - 1){
        ans += `${adjustedAndFilteredTimes[key]} ${key}, `
      }else{
        ans += `${adjustedAndFilteredTimes[key]} ${key}`
      }
      i++
    }
    
    return ans
  }


  // Code wars alternative

  
  function formatDuration (seconds){
    if(seconds == 0) return "now";
    var s = {
      "year" : (60 * 60 * 24 * 365),
      "day" : (60 * 60 * 24),
      "hour" : (60 * 60),
      "minute" : 60
    }
    var output = new Array();
    var years = Math.floor(seconds / s.year);
    if(years > 0){
      output.push(years + " year" + (years == 1 ? "" : "s"));
      seconds = seconds % s.year;
    }
    var days = Math.floor(seconds / s.day);
    if(days > 0){
      output.push(days + " day" + (days == 1 ? "" : "s"));
      seconds = seconds % s.day;
    }
    var hours = Math.floor(seconds / s.hour);
    if(hours > 0){
      output.push(hours + " hour" + (hours == 1 ? "" : "s"));
      seconds = seconds % s.hour;
    }
    var minutes = Math.floor(seconds / s.minute);
    if(minutes > 0){
      output.push(minutes + " minute" + (minutes == 1 ? "" : "s"));
      seconds = seconds % s.minute;
    }
    if(seconds > 0){
      output.push(seconds + " second" + (seconds == 1 ? "" : "s"));
    }
    if(output.length > 1){
      var last = output.pop();
      return output.join(", ") + " and " + last;
    } else {
      return output[0];
    }
  }