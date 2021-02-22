// Given an array of unique characters arr and a string str, Implement a function 
// getShortestUniqueSubstring that finds the smallest substring of str containing all 
// the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

// Come up with an asymptotically optimal solution and analyze the time and space complexities.

// Test Case #4
// Input:
 
// ["A","B","C"], "ADOBECODEBANCDDD"
// Expected:
 
// "BANC"
// Actual:
 
function getShortestUniqueSubstring(arr, str) {
  // your code goes here
  let subString = subStrings(str); //['x', ;y]
  let final = [];

  for (let i = 0; i < subString.length; i++) {
    let sub = subString[i]; // 'x'

    if (stringIncludeKey(arr, sub)) {
      final.push(sub);
    }
  }
//   console.log(final)

  if (final.length === 0) return "";
  let shortest = final[0];
  for (let i = 0; i < final.length; i++) {
    let current = final[i];
    if (current.length < shortest.length) {
      shortest = current;
    }
  }
  return shortest;
}

function subStrings(string) {
  let subs = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      let sub = string.slice(i, j + 1);

      if (!subs.includes(sub)) {
        subs.push(sub);
      }
    }
  }
  return subs;
}

function stringIncludeKey(arr, key) {
//   string = "banc" key = 'abc'
    let keyArr = key.split('');

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (!keyArr.includes(curr)) return false;
  }
  return true;
}

// console.log(stringIncludeKey(["A", "B", "C"], "BANC"));

console.log(getShortestUniqueSubstring(["A","B","C"], "ADOBECODEBANCDDD"));