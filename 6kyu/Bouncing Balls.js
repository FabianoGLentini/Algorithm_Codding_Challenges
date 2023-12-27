// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

// My First Pass

function bouncingBall(h,  bounce,  window) {
    //condition check 
    if( h<0 || bounce >= 1 || bounce <= 0 || window > h) return -1
    
    // add var ans = # time ball height passes by the window 
    let ans = 0 

    // we will loop and check if h is > window once it is false we end the loop
    while(h > window){
      ans++    //every we time we start a loop we increment ans value

      h = h*bounce    //every loop h will equal to h-h*bounce
      
      if(h>window) ans++   //every time h > then window we increment ans an additional time to include the ball passing by the window a second time while it goes down
    }

    return ans
  }

  // My Refractor no breakdown

  function bouncingBall(h,  bounce,  window) {
    if( h<0 || bounce >= 1 || bounce <= 0 || window > h) return -1
    
    let ans = 0 

    while(h > window){
      ans++ 

      h = h*bounce 
      
      if(h>window) ans++  
    }

    return ans
  }

//Code Wars solution with my minor adjustment : var turned to let for clarity

function bouncingBall(h,  bounce,  window) {
    let rebounds = -1;

    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    
    return rebounds;
  }