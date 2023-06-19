// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//First Pass

const rps = (p1, p2) => {
  
    return p1 === p2 ? "Draw!" 
          : p1 === "scissors" && p2 === "paper" ? "Player 1 won!"
          : p1 === "paper" && p2 === "rock" ? "Player 1 won!"
          : p1 === "rock" && p2 === "scissors" ? "Player 1 won!"
          : "Player 2 won!"
  };

//Code wars alternative

const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };