// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

//First Pass

function humanReadable (seconds) {
    let  tmp = 0, ss = [0,0], mm = [0,0], hh = [0,0]


    //seconds
    tmp = (seconds%60).toString().split("")
    tmp.length !== 2 ? ss[1] = tmp[0] : ss = tmp
    
    //minutes
    tmp =(( Math.floor(seconds/60))%60).toString().split("")
    if(tmp.length === 2) { tmp[0] = tmp[0]%6}
    tmp.length !== 2 ? mm[1] = tmp[0] : mm = tmp
    
    //hours
    tmp = Math.floor((seconds/60)/60).toString().split("")
    tmp.length !== 2 ? hh[1] = tmp[0] : hh = tmp
    
    
    return `${hh.join("")}:${mm.join("")}:${ss.join("")}`
  }

  //My Refractor

  function humanReadable (seconds) {
    let  tmp = 0, ss, mm, hh

    function timeArr(arr, x = [0,0]){
    arr.length !== 2 ? x[1] = arr[0] : x = arr

    return x
    }
    
    //seconds
    tmp = (seconds%60).toString().split("")
    ss = timeArr(tmp, x = [0,0])
    
    //minutes
    tmp =(( Math.floor(seconds/60))%60).toString().split("")
    if(tmp.length === 2) { tmp[0] = tmp[0]%6}
    mm = timeArr(tmp, x = [0,0])
    
    //hours
    tmp = Math.floor((seconds/60)/60).toString().split("")
    hh = timeArr(tmp, x = [0,0])
    
    
    return `${hh.join("")}:${mm.join("")}:${ss.join("")}`
  }

//Code Wars Alternative, with my personal adjustments

function humanReadable(seconds) {
    const hours = parseInt( seconds / 3600 ) ;
    const minutes = parseInt( seconds / 60 ) % 60;
    seconds = seconds % 60;
    
    function pad(val){
      return val < 10 ?"0"+val:val;
    }
    
    return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
    }