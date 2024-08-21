// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


// My JS Solution 

const orderedCount = function (text) {
    const chCount = [],
          arrCh = text.split("")
    
    for( ch of arrCh) {
      if(chCount.every(subArr => !(subArr.includes(ch)))){
        chCount.push([ch, arrCh.filter(el => el === ch).length])      
      }
    }
    
    return chCount
  }


// My Refractored Solution 

function orderedCount (text) {
    const arrCh = text.split("")

    return arrCh.reduce((chCount,c) => {
        if(chCount.every(subArr => !subArr.includes(c))) chCount.push([c,arrCh.filter(el => el === c).length])
        return chCount
    },[])
  }

// Code Wars Alternatives

const orderedCount = (text) =>{
    // Implement me!
    const arr = [...new Set([...text])]
    return arr.map(el => [el, [...text].filter(e => e === el).length]);
  }

// Or

const orderedCount = s =>
    Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));