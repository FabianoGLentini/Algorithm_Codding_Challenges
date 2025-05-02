// Here you will create the classic Pascal's triangle.
// Your function will be passed the depth of the triangle and your code has to return the corresponding Pascal's triangle up to that depth.

// The triangle should be returned as a nested array. For example:

// pascal(5) -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
// To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together, except for the edges, which are all 1. e.g.:

//       1
//     1   1
//   1   2   1
// 1   3   3   1

//First Pass

  function pascal(depth) {
    const arr = []
    let tmp

    for(i=0;i<depth;i++){
        arr[i]=[]

        for( j=0; j<=i; j++){
            if(j==i){
                arr[i].push(1);
            }else{
                tmp = (!!arr[i-1][j-1] ? arr[i-1][j-1] : 0) + (!!arr[i-1][j] ? arr[i-1][j] : 0) 
              arr[i].push(tmp)
            }
        }
    }
    return arr;
  }

  //Code Wars Refractor

  const pascal = (depth, arr = [], i = 0) =>
  depth - i ? (arr[i] = [...(arr[i - 1] || arr).map((val, idx) => val + (arr[i - 1][idx - 1] || 0)), 1], pascal(depth, arr, ++i)) : arr;