// String compression 

function stringCompression(string) {
    let count = 0; 
    let res = "";

    for(let i = 0; i < string.length; i++){
        count++
        if(string[i] !== string[i+1]){
            res += string[i] + count;
            count = 0;
        }
    }
    return res;
}

// console.log(stringCompression("aabcccccaaa"));


// anagrams 

function anagrams(str1, str2){
    let obj = {};

    str1.split('').forEach(char => {
        if(!obj[char]) obj[char] = 1
        else(obj[char] += 1)
    })

    str2.split("").forEach((char) => {
      if (!obj[char]) obj[char] = -1;
      else obj[char] -= 1;
    });

    return Object.values(obj).every(val => val === 0);
}

// console.log(anagrams("racecar", "acercar"));

// median of sorted array 

function median(array){

    if(array.length % 2 === 0){
        let mid = array[array.length / 2]; 
        let midLower = array[(array.length / 2)-1]; 
        return (mid + midLower) / 2
    } else {
        return array[Math.floor(array.length / 2)]
    }
}

// console.log(median([1, 2, 3, 4, 5]))

// fibonacci recursive
    // The method should take in an integer n and return the first n Fibonacci numbers in an array.

function recFib(n){
    if(n <= 1) return n; 
    return recFib(n-1) + recFib(n-2)
}

// console.log(recFib(7))

// fibonacci non recrusive 

function iterFib(n){
  let res = [0, 1];
  let i = 1; 
  while(i < n){
      let prevSum = res[res.length - 1] + res[res.length - 2];
      res.push(prevSum)
      i++
  }
  return res.pop()
}

// console.log(iterFib(7));

// palindrome

function isPalindrome(str){
    str = str.split(' ').join('')
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}

// console.log(isPalindrome("dog god"));

// binary tree is binary search tree 

// most frequent occurring elemnt tin array 

function frequentOccChar(arr){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        let char = arr[i];
        if(!obj[char]) obj[char] = 1
        else(obj[char] += 1)
    }

    let values = Object.values(obj);
    let max = Math.max(...values);

    return obj[max];
}

// implement hashmap 

// two arrays intoa  single array 

// given two strings find length of longest substring 

// permutations 

function permutationsString(string) {
  let permutations = [];
  if(string.length <= 1) return string; 

  for(let i = 0; i < string.length; i++){
      let char = string[i];
      let remainingString = string.slice(0, i) + string.slice(i+1);

      for(let subPerm of permutationsString(remainingString)){
          let perm = char + subPerm;
          permutations.push(perm)
      }
  }
  return permutations;
}

//  console.log(permutationsString("cat"));

//  Arrange given numbers to form the biggest number

function compare(X, Y){
    let XY = X+Y; 
    let YX = Y+X
    return Number(XY) > Number(YX) ? 0 : 1
}

function biggestNumber(array){
    let sorted = array.sort((a,b) => compare(a, b))
    let final = ""
    for(let i = 0; i < sorted.length; i++){
        final += sorted[i]
    }
    return final;
}

console.log(biggestNumber(["1", "34", "3", "98", "9", "76", "45", "4"]));
console.log(biggestNumber(["54", "546", "548", "60"]));


// egg drop 


//  Min length of subarray exceeding the target sum
        // example:
        // [1,2,3,4], target = 6,
        // then answer = 2 since sum of all elements of subarray [3,4] has sum>=6 and its length is minimum
        // and if [1,2,3,4], target = 12, then return **-1 **, since no subarray has sum>=12

// optimal path to collect all rocks
    // Given a 2D array, with arr[i][j] representing the number of rock at that location.
    // Find optimal path from location A to location B in a multi dimensional array such that a person can collect maximum amount of rocks

