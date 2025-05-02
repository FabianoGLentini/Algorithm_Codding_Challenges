// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)


// My JS Solution With My Starting Pseudo Code

/*
  Goal:
    - Create function that keeps track of the amount of time it will take in total for all customers to check out
      - This is based on the quen line + customer time as well as number of chckout tills
      - We must go through the customer list in order 
      
    Option:
      - Create variable called totalTimeSpent = 0 to indicate the total time the queue has taken to go through all the customers
      - Create an array called tills that will have a length of variable checkoutTills amount of time
        - Each element slot will have the value 0 to indicate it being vacnat and ready to use by a customer
        
      - Loop through the number of tills to check its vacancies and reduce the time till in use
        - At the start of loop we will increment totalTimeSpent variable by 1 to indicate the minutes passing
        - While going through each till slot if slot === 0 we will shitf the customer list and intput its value into vacant slot
        - If slot !== 0 we will decrement the value
        *Note* Both tills.every(el => el === 0) & customers.legnth() === 0 must be true before ending loop
        
*/

function queueTime(customers, checkoutTills) {
  
    if(customers.length === 0) return 0
    let totalTimeSpent = 0
    const tills = new Array(checkoutTills).fill(0),
          customersQueue = [... customers]
    
    // Loop Until there are no more customer at tills nor in queue
    do {
      ++totalTimeSpent
      
      // Check available tills which is till === 0  and reduce time on customers in tills when till > 0 
      for(let i = 0; i < tills.length; i++) {
        
        // Removes customer from queue add to an available till
        if(tills[i] === 0) tills[i] = customersQueue.shift() || 0
        
        // Reduces time left of customer using till, includeing if that customer just got to till
        if(tills[i] > 0 ) tills[i] -= 1
      } 
      
    } while(tills.some(el => el !== 0) || customersQueue.length !== 0)
    return totalTimeSpent
  }

// Code Wars Alternatives

function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
    }
    return Math.max(...w);
  }

// Or 

function queueTime(customers, n) {
    let tills = Array(n).fill(0);
    
    customers.forEach((customer) => {
      let nextTill = tills.indexOf(Math.min(...tills))
      tills[nextTill] += customer;
    });
  
    return Math.max(...tills);
  }

// Chat Recomendation

function queueTime(customers, checkoutTills) {
    if (customers.length === 0) return 0;

    const tills = new Array(checkoutTills).fill(0);
    
    customers.forEach(customer => {
        // Find the till with the minimum time left
        const nextTill = tills.indexOf(Math.min(...tills));
        // Add the current customer's time to that till
        tills[nextTill] += customer;
    });

    // The total time is the maximum time remaining in the tills
    return Math.max(...tills);
}
