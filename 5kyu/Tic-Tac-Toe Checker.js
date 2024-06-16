//If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

//Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

//[[0, 0, 1],
// [0, 1, 2],
// [2, 1, 0]]
//We want our function to return:

//-1 if the board is not yet finished AND no one has won yet (there are empty spots),
//1 if "X" won,
//2 if "O" won,
//0 if it's a cat's game (i.e. a draw).
//You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe


// My Solution 


/*
    Psuedo:
    
    Notes:
    
    - we get an arr containing 3 arrays
    - el 0 are empty slots, el 1 are X and el 2 are O
    - must return -1 if match incomplete , 1 if X won, 2 if O won, 0 if draw
    
    
    Win conditions:
    - Either row/ entire sub array === 1 or 2 
    - Either column/ each elemen of same index on each sub arr have same value 
    - arr[0][0] & arr[1][1] & arr[2][2] == same value of X or O 
    - arr[0][2] & arr[1][1] & arr[2][1] == same value of X or O 
*/

function isSolved(board) {
  
  if(board.some(arr => arr.every(el => el === 1) || arr.every(el => el === 2))) {
    return board.find( arr => arr.every(el => el === 1) || arr.every(el => el === 2)).pop() 
  }
  
  if( board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === board[2][2] && board[0][0] !== 0){
    return board[0][0]
  }
  
  if(board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] === board[2][0]){ I
  return board[0][2]
  }
  
  const colCk = []
  
  
  if(board.every(arr => arr.every(el => el === 1 || el === 2))) {
    return 0
  }
 
  return -1
}



//Code Wars Alternative


function isSolved(board) {
  
  function checkHor() {
  var res;
    board.forEach(function(item){
      if (item[0] == item[1] &&
          item[0] == item[2] &&
          item[1] == item[2] &&
          item[0] != 0)
      res = item[0];
    });
    return res;
  }
  
  function checkVer() {
    for (var a = 0; a< 3; a++)
    {
    if (board[0][a]==board[1][a]&&
        board[1][a]==board[2][a]&&
        board[2][a]==board[0][a]&&
        board[0][a]!=0)
        return board[0][a];
    }
  }
  
  function checkA1(){
  if ((board[0][0]==board[1][1]&&
       board[1][1]==board[2][2]&&
       board[2][2]==board[0][0])||
     ( board[0][2]==board[1][1]&&
       board[1][1]==board[2][0]&&
       board[2][0]==board[0][2]))
      return board[1][1];
  }
  
 
  function gameOver() {
  for (var x = 0; x < 3; x++)
  for (var y = 0; y < 3; y++)
    if  (board[x][y] == 0)
      return -1;
  return 0;
  }
  
  return checkHor() || checkVer() || checkA1() || gameOver();
}


// Or

const horizontal = (player) => (board) => 
  board.some(row => row.every(spot => spot == player))
  
const vertical = (player) => (board) => 
  board.some((row, i) => board.every(row => row[i] == player))
  
const diagonals = (player) => (board) => 
  board.every((row, i) => row[i] == player) || board.every((row, i) => row[3-1-i] == player)
  
const player = (number) => ({
  wins: (board) => [horizontal, vertical, diagonals].some(full => full(number)(board))
})

const unfinished = (board) =>
  board.some(row => row.some(spot => !spot))

const DRAW = 0


const isSolved = (board) => {switch (true) {
  case player(1).wins (board):
    return 1
    
  case player(2).wins (board):
    return 2
  
  case unfinished (board):
    return -1

  default:
    return DRAW
}}
  