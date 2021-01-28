
// IS UNIQUE:
// Implement an algorithtm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// 'hello' -> false 
// 'abcedfghijk' -> true 

function isUnique(string){
    let newStr = "";

    for(let i = 0; i < string.length; i++){
        if(newStr.includes(string[i])){
            return false;
        } else {
            newStr += string[i];
        }
    }

    return true;
}

// console.log(isUnique('hello'));
// console.log(isUnique("abcedfghijk"));


// CHECK PERMUTATION 
// Give two strings, write a method to decide if one is a permutation of the other?
// Permutation can be thought of as anagrams --> does it have all the same chars?

//  “abcd” and “dabc” => True 
//  "hello" and "boot" => false 

function checkPermutation(string1, string2){
    let obj = {};

    string1.split('').forEach(char => {
        if(!obj[char]){
            obj[char] = 1;
        } else {
            obj[char] += 1
        }
    })

    string2.split('').forEach(char => {
        if(!obj[char]){
            obj[char] = 1
        } else {
            obj[char] -= 1
        }
    })

    return Object.values(obj).every(val => val === 0);
}

// console.log(checkPermutation("abcd", "dabc"));
// console.log(checkPermutation("hello", "boot"));


// URLify 
// Write a method to replace all spaces in a string with '%20'. 
// You may assume that the string has sufficient space at the end to hold 
// the additional characters,and that you are given the "true" length of the string. 
// (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)

// EXAMPLE
// Input: "Mr John Smith ", 13
// Output: "Mr%20John%20Smith"

function urlify(string){
    let url = ""
    for(let i = 0; i < string.length -1; i++){
        if(string[i] === ' '){
            url += '%20';
        } else {
            url += string[i]
        }
    }
    return url;
}

// console.log(urlify("Mr John Smith "));

// PALINDROME PERMUTATION 
// Given a string, write a function to check if it is a permutation of a palin­drome. 
// A palindrome is a word or phrase that is the same forwards and backwards. 
// A permutation is a rearrangement of letters. 
// The palindrome does not need to be limited to just dictionary words.

// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)


// find all permutation
// check to see if permutation is a palindrome 

function reverse(string){
    return string.split('').reverse().join('')
}

function permutation(string){
    if(string.length <= 1) return string;
    let permutations = [];

    for(let i = 0; i < string.length; i++){
        let char = string[i];
        let remainingString = string.slice(0, i) + string.slice(i + 1, string.length)

        for (let subPermutation of permutation(remainingString)) {
            let perm = char + subPermutation
            permutations.push(perm)
        }
    }
    return permutations;
}



function palindromePermutation(string){
    let newString = string.split(' ').join('').toLowerCase()
    let perms = permutation(newString)
    return perms.some(word => word === reverse(word))
}


// console.log(palindromePermutation("Tact Coa"));

// ONE WAY 
// There are three types of edits that can be performed on strings: 
// insert a character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are one edit (or zero edits) away.

// EXAMPLE
// pale, ple -> true 
// pales, pale -> true 
// pale, bale -> true 
// pale, bake -> false

function oneway(string1, string2){
    let obj = {};
    let count = 0;

    string1.split('').forEach(char => {
        if(!obj[char]){
            obj[char] = 1
        } else {
            obj[char] += 1
        }
    })
    string2.split("").forEach((char) => {
      if (!obj[char]) {
        obj[char] = 1;
      } else {
        obj[char] -= 1;
      }
    });

    Object.values(obj).forEach(val => count += val);
    return count <= 1;
}

// console.log(oneway('pale', 'bake'));


// STRING COMPRESSION 
// Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2b1c5a3. 
// If the "compressed" string would not become smaller than the original string, 
// your method should return the original string. 
// You can assume the string has only uppercase and lowercase letters (a - z).


function compressString(string){
    let count = 0; 
    let compressed = "";

    for(let i = 0; i < string.length; i++){
        count += 1;

        if(string[i] !== string[i + 1]){
            compressed += string[i] + count; 
            count = 0; 
        } 
    }

    return compressed;
}

// console.log(compressString('aabcccccaaa'));

// [

// [a,b,c]
// [d,e,f] //original matrix
// [g,h,i]

// [a,d,g]
// [b,e,h] //transposed matrix
// [c,f,i]

// [g,d,a]
// [h,e,b] //turned clockwise
// [i,f,c]



// a [0,0][0,2]
// b [0,1][1,2] // first row, you flip pairs and replace second digit with matrix length
// c [0,2][2,2]

// d [1,0][0,1]
// e [1,1][1,1] // all other rows, flip pairs
// f [1,2][2,1]

// g [2,0][0,0]
// h [2,1][1,0] // last row you flip pairs and replace second digit with 0
// i [2,2][2,0]


// ]

// Rotating a specific layer would just mean swapping the values in four arrays. 
// If you were asked to swap the values in two arrays, could you do this? 
// Can you then extend it to four arrays?

// ROTATE MATRIX 
// Given an image represented by an NxN matrix, where each pixel in the 
// image is 4 bytes, write a method to rotate the image by 90 degrees. 
// Can you do this in place?

function rotateMatrix(matrix){
    let n = matrix.length; 
    for(let i = 0; i < (n/2); i++){
        let first = i; 
        let last = n - 1 - i; 

        for(j = first; j < last; j++){
            let offset = j - first;
            let top = matrix[first][j]; 
            
            // left to top
            matrix[first][j] = matrix[last-offset][first];

            // bottom to left
            matrix[last-offset][first] = matrix[last][last - offset]

            // right to bottom 
            matrix[last][last - offset] = matrix[j][last]

            // top to right 
            matrix[j][last] = top;

        }
    }

    return matrix;
}

// let matrix = [["a","b","c"],["d","e","f"],["g","h","i"]]

// console.log(rotateMatrix(matrix));



// ZERO MATRIX 
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

let matrix= [
    [1,1],
    [1,1],
    [0,1],
]

// [0,1]
// [0,1]
// [0,0]

function zeroMatrix(matrix){

    let rows = [];
    let col = [];

    for(let i = 0; i < matrix.length; i++){
        for(let j=0; j <matrix[0].length; j++){
            if (matrix[i][j] === 0){
                rows.push(i)
                col.push(j)
            }
        }
    }

    for (let z = 0; z < matrix.length; z++){
        for(let y = 0; y < matrix[0].length; y++){
            if (rows.includes(z) || col.includes(y)){
                matrix[z][y] = 0;            
            }
        }
    }

    return matrix;
}


// STRING ROTATION 
// Assume you have a method isSubstring which checks if one word is a substring of another. 
// Given two strings, s1 and s2, write code to check if s2 is a rotation of sl using only 
// one call to isSubstring (e.g.,"waterbottle" is a rotation of "erbottlewat").


// is string1 === to a rotation of string 2 
// 
function stringRotation(string1, string2){
  let array1 = string1.split("");

  let i = 0;
  while (i < array1.length) {
    array1.push(array1.shift());

    if (array1.join("") === string2) {
      return true;
    }

    i += 1;
  }

  return false;
}

// console.log(stringRotation("waterbottle", "erbottlewat"));

// REMOVE DUPS 
// Write code to remove duplicates from an unsorted linked list.

function removeDups(dups){
    let noDups = [];

    for(let i = 0; i < dups.length; i++){
        if(!noDups.includes(dups[i])){
            noDups.push(dups[i])
        }
    }

    return noDups;
}

// solution 

function deleteDups(n){
    let obj = {};
    n.previous = null;

    while(n != null){
        if (Object.values(obj).includes(n.data)) {
            previous.next = n.next;
        } else {
          obj[n] = n.data;
          previous = n;
        }

        n = n.next;
    }

    return obj;
}


console.log(removeDups([1, 1, 3, 5, 7, 4, 4]));