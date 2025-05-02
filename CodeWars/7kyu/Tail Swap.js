// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

//First Pass

function tailSwap(arr) {
    const cutTail = arr.map(str => str.split(":"))
    
    return [(cutTail[0][0]+":").concat(cutTail[1][1]), (cutTail[1][0]+":").concat(cutTail[0][1])]
  }

//Code Wars Alternative

function tailSwap(arr) {
    const [aa, ab] = arr[0].split(":")
    const [ba, bb] = arr[1].split(":")
    return [`${aa}:${bb}`, `${ba}:${ab}`]
  }