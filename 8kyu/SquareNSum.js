// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 

//First Pass

function squareSum(numbers){
    let squaredSum = 0

    numbers.forEach(e => squaredSum+= e**2)
    return squaredSum
}

//Best practice by code wars

function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}
