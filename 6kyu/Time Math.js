// Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

// timeMath('01:24:31', '+', '02:16:05') === '03:40:36'

// timeMath('01:24:31', '-', '02:31:41') === '22:52:50'


// My Pass

function timeMath(time1, op, time2) {
    time1 = time1.split(":").map(el => parseInt(el)) 
    time2 = time2.split(":").map( el => parseInt(el))
    
    const times = [],
          sign = op === "+" ? 1 : -1
    
    
    for(i=0;i<3;i++) {
        times.push(time1[i] + sign*time2[i])
    }
    
    if(times[2] >= 60) times[1] += Math.floor(times[2]/60)
    if(times[1] >= 60) times[0] += Math.floor(times[1]/60)
    
    if(times[2] < 0) times[1] -= Math.ceil(Math.abs(times[2])/60) , times[2] += Math.ceil(Math.abs(times[2])/60)*60
    if(times[1] < 0) times[0] -= Math.ceil(Math.abs(times[1])/60) , times[1] += Math.ceil(Math.abs(times[1])/60)*60
    if(times[0] < 0) times[0] += 24
    
    
    return (times[0] % 24 > 9 ? times[0] % 24 : "0" + times[0] % 24) 
      + ":" + (times[1] % 60 > 9 ? times[1] % 60 : "0" + times[1] % 60)
      + ":" + (times[2] % 60 > 9 ? times[2] % 60 : "0" + times[2] % 60)
    
  }

  
  // Code Wars Alternative

  // Note this took a smarter approach by turning the values into second and then turning them back into a timer as oppose to keeping them hour min and seconds seperatly the hole time
  function timeMath(time1, op, time2) { 

    let seconds = time => 
      time.split(':').reduce((a, b) => a * 60 + +b, 0);
    
    let res = op === '+'
      ? seconds(time1) + seconds(time2)
      : seconds(time1) - seconds(time2);
  
    let date = new Date(res * 1000);
  
    return date.toTimeString().slice(0, 8);
      
  }