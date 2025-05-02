// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.


// My Pass

function removeConsecutiveDuplicates(string) {

    return string.split(" ").reduce((acc,c) => {

      c === acc[acc.length - 1] ? "" : acc.push(c)

      return acc

      }, []).join(" ")
  }


// Code Wars Alternative

function removeConsecutiveDuplicates(str) {
    return str
      .split(" ")
      .filter((word, index, arr) => word !== arr[index + 1])
      .join(" ");
  }

  // Or 

  const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");