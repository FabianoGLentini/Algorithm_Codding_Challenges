// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// // Please do not use
// const forbidden = "
//                   '
//                   `
//                   string
//                   fixed
//                   precision
//                   .keys

//Breakdown

function reverse(n){
    //var to contain our reversed answer
    let rev = 0;

    //Recursive Loop with base case of n = 0 stopping the loop when n reaches 0
    while (n) {
        //  n % 10 will give us the last digit of the number by removing all the numbers above 10, before adding n%10 to rev we do revv*10 so that we essentially push the current digit up 1 so if we had rev = 9 and n%10 equals 5 we would get 95 as opose to 13
        rev = rev * 10 + n % 10;

        //we remove the last digit from n by essentially pushing the number down into decimal and then florring it to remove the las digit, for example if n = 123 and we devide 123 by 10 we get 12.3 and once we floor it weve succesfully removed the last digit while keeping the numbers prior giving us 12
        n = Math.floor(n/10);
    }
    return rev;
}

//Code Wars Solution

function reverse(n){
    let rev = 0;
    while (n) {
        rev = rev * 10 + n % 10;
        n = Math.floor(n/10);
      
      console.log(rev,n)
    }
    return rev;
  }

//or

function reverse(n, a = 0) {
    return n ? reverse(~~(n / 10), a * 10 + n % 10) : a;
}