// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

//First Pass



function getDivisorsCnt(n){
    let div = 0
    
     for ( let i = 1; i <= n; i++){

     if ( !(n % i)){
      ++div
    }
   }
   return div
}
// not efficient enough code


//Code wars solution Breakdown
function getDivisorsCnt(n){
    var res=[], sqrt=Math.sqrt(n); 
    //we use the sqrt of n as we dont need to test anything above the sqrt as it wont give 0 when checking the remainder of n, n % Math.sqrt(n). This will reduce the amount of runs the loop does.
    for(let i=1; i<=sqrt; ++i){
        //we push our succesfull results in our res array
      if(n%i==0){res.push(i); res.push(n/i);}
    }
    //
    res = Array.from(new Set(res));
    return res.length;
}