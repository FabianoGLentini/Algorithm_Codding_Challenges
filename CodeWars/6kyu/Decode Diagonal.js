/*
Decode the diagonal.

Given a grid of characters. Output a decoded message as a string.

Input

  H Z R R Q
  D I F C A E A !
  G H T E L A E 
  L M N H P R F 
  X Z R P E
Output

HITHERE! (diagonally down right ↘ and diagonally up right ↗ if you can't go further).

The message ends when there is no space at the right up or down diagonal.

To make things even clearer: the same example, but in a simplified view

  H _ _ _ _
  _ I _ _ _ _ _ !
  _ _ T _ _ _ E 
  _ _ _ H _ R _
  _ _ _ _ E

*/

// My First Attempt

/*
  Pseudo:
  
  - need to go up the array diagonally by going down a row and going up a column based on row number
  - Once you can no longer go any further diagonally down then you need to go diagonoly up
  - as you go up you continue increasing the column but you start decreasing the row
  
  Options:
  - Index increases until we hit false value then we decrease until we hit false value
  - Column increase every loop by 1
  - Once we hit false value 2 times sequentially we endd loop 
  - We join arr with the inputed diagonal strings and return it 
*/


  function getDiagonalCode(grid) {


    grid = grid.split("\n").map(el => el.replaceAll(" ", ''))
    


    const decode = []
    
    let i = 0,
        column = 0,
        n = 0,
        dir = 1
    
    while(n < 2) {

      if(!(!!grid[i][column])) {
        n++
        dir = (dir === 1 ? -1 : 1)
        continue
      }

      
      decode.push(grid[i][column])
      
      dir === 1 ? i += 1 : i -= 1
      
      if(i + 1 === grid.length) {
        
      }
      column += 1
      

      
    }

    
    return decode
  }


// Code Wars Solution

function getDiagonalCode(text) {
  const grid = text.split('\n');
  let row = 0;
  let col = 0;
  let dir = 1;
  let result = '';
  
  while (grid[row] && grid[row][col]) {
    result += grid[row][col];
    row += 1 * dir;
    col += 2;
    if (row === grid.length - 1 || row === 0) dir *= -1;
  }
  
  return result;
}