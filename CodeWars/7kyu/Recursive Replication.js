// You need to design a recursive function called replicate which will receive arguments times and number.

// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

// As tempting as it may seem, do not use loops to solve this problem.

//Break Down

function replicate(times, number) {
    //we check if times has reached zero  or started as negative, if yes we  return [] else we return an array taht contains the number to begin with and then we add to that arr a recursion of the function spread to pull out whatever value it adds while reducing times down by 1
    return times > 0 ? [number, ...replicate( times - 1, number )] : [];
  }

//Or

function replicate(times, number){
    // check if times is above one if no we return empty arr and that ends the loop. The base case is times being billow or equal to 1
	if(times < 1)
		return [];
	else
    //else times is above 1 we return number in an array concat it to the recursion of the function with times -1 to eventually stop the recursion
		return [number].concat(replicate(times - 1, number));
}

//plain code

function replicate(times, number){
	if(times < 1)
		return [];
	else
		return [number].concat(replicate(times - 1, number));
}

//or

function replicate(times, number) {
    return times > 0 ? [number, ...replicate( times - 1, number )] : [];
  }