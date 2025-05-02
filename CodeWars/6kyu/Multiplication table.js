// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

//My First Pass

multiplicationTable = function(size) {
    const ans = []
  
    for(i=0;i<size;i++) {
        ans.push([])
      
      for(j=1;j<=size;j++){
        ans[i].push(j*(i+1))
      }
    }
    return ans
  }
  

//Code Wars Alternative

multiplicationTable = function(n) {
    return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>(i+1)*(j+1)))
  }