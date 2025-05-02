//First Failed attempt : this code nearly had it but it would fail as it wasent moving numbers but copying and would result in some duplicates depending on the n given...

// function nextBigger(n){
//     //need arr of n  list reversed to simulate going from back to front when comparing in our loop, need a high var to hold the current highest number and a pre var to hold current low number. high will start with the first numb of arr
//     const arr = n.toString().split("").reverse()
//     const arrN = []
//     let high =  arr[0], pre
    
//     console.log(arr)
//     //need to go through each num in arr starting from end
//     arr.forEach((c,i)=>{

//         //compare max to current num
//             //if current number is smaller place current number in pre and replace high with compared num and unshift pre
//         if(i == arr.length - 1 && c<high){
//             arrN.unshift(high)

//         }else if(i == arr.length - 1 && c>high){
//             arrN.unshift(c)


//         }else if(c>high){
//             pre = high
//             high = c

//             arrN.unshift(pre)
//         }else{
//             pre = c

//             arrN.unshift(pre)
//         }

//     })
    
//     //reverse arrN join the number and compare to n to see if they are the same if yes return -1 else return arrN as number
//     const newN = Number(arrN.join(""))

//     return newN === n ? -1: newN;
//   }




//This was second Failed attemp, it was working for small numbers but would fail to give the nex biggest number as it was merely moving the current number till it found a bigger number to replace it with, this would fall short for large numbers 

/* I need to take the number split it into an array and change its order starting from the back bringing the largest number to the front swapping as we find higher number placing the curren highest in the index position. At the end we place highest number and push back the last number at the front otherwise we place the c number before the last number at the front*/

/*important we need to avoid creating numbers and instead just moving numbers so focusing on shifting and unshiftin / push and pop methods?*/

function nextBigger(n){
    //we need the arr of n digits
    const arr = n.toString().split("")
    //we need to pop the last num of arr n digits and place it into the currentDigit comparing number
    let currentDigit = arr.pop()
    //we need a new arr to contain the digits as we succesfully compare them. newArr
    const newArr = []
    //need a var to dump numbers that fail comparison in a pop fashion
    let dump

    //go through each digits starting at the back
     /* note we are pulling we are reducing the index every step, so no need to concern ourselfes of pulling a specific index position the current arr[i] should in theory always be the last one */
     /*important to note we only need to shift once. As soon as we have a number just one shift higher we need to stop and merge what we have*/
     for(i=arr.length -1 ; i >=0 ; i--){

        //check if we have a new currentDigit so we know if weve already found the next higher number using available digits
        if(dump >=0){
        
        //compare currentDigit with arr[i]
        //if currentDigit is larger then arr[i] pop arr[i] and place in newArr
        }else if(currentDigit>arr[i]){
            dump = arr.pop()
            newArr.push(dump)

        //else pop currentDigit into newArr and pop arr[i] into currentDigit
        /*what happens if we are at the last existing digit?*/
        }else if(currentDigit<=arr[i]){
            newArr.push(currentDigit)
            currentDigit = arr.pop()

        //we need to place whatever we have left in the newArr
        } 
     }
     newArr.push(currentDigit)

     const seconPart = newArr.reverse().join("")
     const firstPart = arr.join("")
     const newNum = Number(firstPart + seconPart)

    return newNum !== n ? newNum : -1 ;
}


//Code wars solution Break down of a successfull efficient solution


function nextBigger(n){
  
    //chars is the digits arr of n
    const chars = n.toString().split('');
    
    //i currently contains the highest possible index of the arr chars
    let i = chars.length-1;
    
    //filtering through next highest number? it is going through the arr chars in reverse. Important to note we are reducing the value of i by 1 every time we loop for future use
    while(i > 0) {
      //if char[i] is greator then char[i-1] we end the loop and thus keep the new value of i which will indicate at what chars index i was greator then. This is great as it informs us what numbers we will need to swap to get the next biggest number
      if (chars[i]>chars[i-1]) break;
      i--;
    }
    
    //here we are checking if our while statement reached all the way down to the end, which would inform us that there are no bigger numbers we can create thus we need to end the function here and return -1
    if (i == 0) return -1;
    
    //...if the if statement failed, we proceed to the next half of the function to perform the swap of numbers in the chars arr...
    
    //we are splicing chars at the point of our current index which indicated which was the next highest number in the digit line and stored it in suf variable
    //suf ends up being a small to big isolated chunk of num from the lower part of chars arr
    //we are also sorting the splice array so that we can ease from smallest number to highest helping us find the next greater number using same n's digits
    /*important to note splice mutates the original array thus properly removing the indicated values/ part of the array to store in suf*/
    const suf = chars.splice(i).sort();
    //this variable t will take on the value of the last digit that was left behind by the slice. 
    const t = chars[chars.length-1];
    
    //we are changing the value of our i to 0 now using it as a traditional index for a for loop
    //we are looping through the suf arr, we are looking to find what the index position of the next highest number in the suf arr is compared to the last value of char arr which is t
    // once we find it we break the code and thus our i contains its last value as we had created the variable in the funcction scope instead of the for loop scope
    //same as before i will contain the final index value of the loop, indicating at what index it found the condition to be true
    for (i = 0; i < suf.length; ++i) {
      if (suf[i] > t) break;
    }

    //we are taking the last value of the splice chars array and replacing it with the suf at the position i which we found from prior loop is the greator digit
    chars[chars.length-1] = suf[i]
    //then we replace suf[i] with the highest digit we found mid way through the char array essentially making the values swap between the  chars[chars.length-1] = suf[i] above and the  suf[i] = t; billow
    suf[i] = t;

    //we finally concatonate the two arrays together creating the array which contains the newly reorder digits creating the next biggest number using the digits from n
    const res = chars.concat(suf);
    //we finally join the array together and then poll it out of the string to return the new set of digits equaling to the next bigger num with same digits
    const num = parseInt(res.join(''));
    return num;
}