// You need to cook pancakes, but you are very hungry. As known, one needs to fry a pancake one minute on each side. What is the minimum time you need to cook n pancakes, if you can put on the frying pan only m pancakes at a time? n and m are positive integers between 1 and 1000.


// My First Pass

const cookPancakes = (n, m) => n < m ? 2 : Math.ceil(n*2 / m)

// Code Wars Alternative 

function cookPancakes(n, m) { 
    const time = Math.ceil((n * 2) / m);
    return time === 1 ? 2 : time;
  }