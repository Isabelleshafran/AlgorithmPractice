
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

console.log(compressString('aabcccccaaa'));