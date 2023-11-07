// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

//My First Pass

function score( dice ) {  
    const rules = []
    let ans = 0, points
    
    points = dice.reduce((obj,it) => {
      obj[it] = obj[it] + 1 || 1
      return obj
    },{})
    
    for(num in points){
      if(num == 1) ans += points[num] === 5 ? 1200 : points[num] === 4 ? 1100 : points[num] === 3 ? 1000 : points[num] === 2 ? 200 : points[num] === 1 ? 100 : 0
      if(num == 5) ans += points[num] === 5 ? 600 : points[num] === 4 ? 550 : points[num] === 3 ? 500 : points[num] === 2 ? 100 : points[num] === 1 ? 50 : 0

      if(num == 2) ans += points[num] >= 3 ? 200 : 0
      if(num == 3) ans += points[num] >= 3 ? 300 : 0
      if(num == 4) ans += points[num] >= 3 ? 400 : 0
      if(num == 6) ans += points[num] >= 3 ? 600 : 0
    }
    
    return ans
  }

//Code Wars Alternative

function score(dice) {
    var count = dice.reduce(function(acc, v){ 
      acc[v-1]++;
      return acc
    }, [0, 0, 0, 0, 0, 0])
    
    return [
      [3, 1, 1000], 
      [3, 6,  600], 
      [3, 5,  500], 
      [3, 4,  400], 
      [3, 3,  300], 
      [3, 2,  200], 
      [1, 1,  100], 
      [1, 5,   50]]
        .reduce(function(res, rule){ 
          while (count[rule[1]-1] >= rule[0])
          {
            res += rule[2]
            count[rule[1]-1] -= rule[0]
          }
          return res
        }, 0)
  }

  //or

function score( dice ) {
    var six=0, five=0, four=0, three=0, too=0, one=0;
    var i = 0;
    while (i < 5) {
      if (dice[i] == 6) { six++; }
      if (dice[i] == 5) { five++; }
      if (dice[i] == 4) { four++; }
      if (dice[i] == 3) { three++; }
      if (dice[i] == 2) { too++; }
      if (dice[i] == 1) { one++; }
      i++;
    }
    var r = 0;
    if (one > 2) { r += 1000; one -= 3;}
    if (six > 2) { r += 600; }
    if (five > 2) { r += 500; five -= 3;}
    if (four > 2) { r += 400; }
    if (three > 2) { r += 300; }
    if (too > 2) { r += 200; }
    r += one * 100;
    r += five * 50;
    return r;
  }
