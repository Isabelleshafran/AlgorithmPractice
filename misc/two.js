

/*
   Given two strings, find if first string is a subsequence of second

    A subsequence is a sequence that can be derived from another sequence 
    by deleting some elements without changing the order of the remaining elements 
    Expected time complexity is linear.

    Input: str1 = "AXY", str2 = "ADXCPY"
    Output: True (str1 is a subsequence of str2)

    Input: str1 = "AXY", str2 = "YADXCP"
    Output: False (str1 is not a subsequence of str2)
*/

    function subsequence(string, key){
        if(key.length === 0) return true;

        let firstKey = key[0];
        let keyIndex = string.indexOf(firstKey);

        if(keyIndex === -1) return false;
        return subsequence(string.slice(keyIndex+1), key.slice(1))
    }

    let string = "YADXCP";
    let key = "AXY";

    // console.log(subsequence(string, key));

/*
    Given a bunch of events each with a starting and ending time, 
    construct a schedule for which I am 'not busy'.

    input: [[9,10][8,9][14,17][13,14]]
    output: 
*/

// [ [ 8, 9 ], [ 9, 10 ], [ 13, 14 ], [ 14, 17 ] ]


    function notBusy(array){
        let sorted = array.sort((a,b) => a[0] - b[0]);
        let result = [];

        for(let i = 0; i < sorted.length; i++){
            let current = sorted[i];
            let next = sorted[i+1]

            if(current[1] < next[0]){
                result.push([current[0], next[0]])
            }
        }
        return result
    }

    // console.log(notBusy([[9,10],[8,9],[14,17],[13,14]]));

/*
    Given a string, find the first occurring unique character.
*/

function firstUniqueChar(string){
    let obj = {};
    
    string.split('').forEach(char => {
        if(!obj[char]){
            obj[char] = 1; 
        } else {
            obj[char] += 1; 
        }
    })

    for(let i = 0; i < string.length; i++){
        let char = string[i];
        if(obj[char] === 1) {
            return char;
        }
    }

}

// console.log(firstUniqueChar('ccattbb'));


/*
    Are two words anagrams of each other
*/

function anagrams(string1, string2){
 let obj = {};

    string1.split("").forEach((char) => {
    if (!obj[char]) {
        obj[char] = 1;
    } else {
        obj[char] += 1;
    }
    });

    string2.split("").forEach((char) => {
        if (!obj[char]) {
        obj[char] = 1;
        } else {
        obj[char] -= 1;
        }
    });

    return Object.values(obj).every(char => char === 0);
}

// console.log(anagrams('cat', 'tpc'));

/*
    Candy crush words - removing letters that appear at least 3 times in a row
    (ABCCCBB => ABBB => A)

    similar to candy crush. If you get a string 'crush' any characters that occurs 3 or more times in a row. keep doing this until there cant be any more candies 'crushed'
    'abbbaa' => 'aaa' => ''
    'abnnnnke' => 'abke'
    - optimal solution is to use a 2d stack, so you can get it in O(n) time.  
    In that you hold the char and the the second index is how many times it occurs. 
    if you get to a new char check the previous entry in the stack if is has more than 
    3 in a row pop it off. increment the top element in the stack if it is the same char 
    if not add a new one. then at the end build the new string out of the stack.

*/


function candyCrush(string){
    const stack = [["", 0]];

    for(let i = 0; i < string.length; i++){
        let char = string[i];
        let [prev, count] = stack[stack.length-1];

        if(char !== prev){
            stack.push([char, 1])
        } else {
            if(count >= 2 && char !== string[i+1]) while(count--){
                stack.pop()
            } else {
                stack.push([char, count+1])
            }
        }
    }
    return stack.map(x => x[0]).join('');
}

// console.log(candyCrush("abnnnnke"));

/*
    variation on two sum but needed to count all the same pairs as well with many repeating numbers in the array.
    **look at hackerrank for not 2d solution**

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

function twoSum(nums, target){
   let obj = {};
   let indicies = [];

   for(let i = 0; i < nums.length; i++){
       let current = nums[i];
       let difference = target - current; 

       if(difference in obj){
           indicies.push(obj[difference], i)
       }

       obj[current] = i;
   }

   return indicies;
}

// console.log(twoSum([2, 7, 11, 15], 9));



/*
    Almost identical to leetcode #200
    Given grid(2d array) with "0" - sky and "1" - cloud, return count of the clouds.
    
*/


/*
    Design a phone book (OOP)
*/


/*
    Object-oriented programming question about designing an Order class from an apparel store.
*/

/*
    LeetCode Merge Intervals 
*/

/*
    LeetCode Design Underground System
*/


/*
    given a string return the number of times each character appears. 
    followed up with what if we return the counts of each word in the string. 
    How does the time complexity differ for each approach.
    
*/


/*
    given two arrays return a new array consisting of values that appear in both arrays.
    At first the arrays are not sorted.
    Given two sorted arrays how would you refactor your code.
    How would you ensure our answer array doesn't have repeating elements.

*/

// not sorted 
function valuesInBoth(array1, array2){
    let final = [];

    for(let i = 0; i < array1.length; i++){
        let num = array1[i];
        if(array2.includes(num)){
            final.push(num)
        }
    }

    return final; 
}

// console.log(valuesInBoth([3, 13, 5, 6, 12], [12, 1, 33, 5]));

// sorted 


/*

    Given a string s, find the length of the longest substring without repeating characters.
    followed up with:
    - Can we do better than O(n2) time
    - what if we want the string to be a minimum length of k
    - what if we want the string to contain each letter at least k time
    
*/

/*

    Write a method that takes a number and use the Collatz conjecture to figure out how 
    many steps it takes to turn it into the number one. This was pretty straight forward. 
    just have a counter and add to it every time you modify the current number you are at

*/

/*
    validate a binary search tree (leetcode #98)
*/

/*
    given an array of integers and a target integer return the number of pairs 
    in the array that sum to the target number. 
    repeats of the same number count as separate integers
*/

/*
    Given a sorted array of integers, return count number of triplets from the array that are a valid triangle
    [2, 3, 5, 7] => [3,5,7] => count = 1
*/


/*

    was given a root node of a tree that is a lattice (so nodes can have many children, 
    and they all point back to a single leaf node/ the tree collapses back down to 1). 
    apparently lattices are often viewed flipped upside down, where the leaf is level 0. 
    and the parent is the highest level. Assuming that the node class has a level property, 
    I needed to write a function that set that level property on the nodes. 

*/

/*
    Given a list of integers and a desired sum, write a function that calculates a threshold number x
    such that when summing up the list of integers everything greater than x can be substituted with x
    to give the desired sum. For example, if given a list [1, 2, 5] and a desired sum of 6. a threshold of
    3 once applied to the list can yield the desired sum (i.e. 1 + 2 + 3 = 6) If there
    are multiple of such thresholds we'd like to find the lowest one.
    [1, 2, 5], 6 -> 3
    [40, 20, 10, 30], 70  -> 20
    [40, 20, 30, 10], 71  -> 20.5
    [40, 20, 10, 30], 100 -> 40
*/


/*
 LeetCode questions (including: #117, #1396, #146, #394)
*/


/*
    Given two linked lists that are in reverse order, add them together and return the sum in the correct order
    ex.
    l1 = 1 - 2 -3 = 321
    l2 = 4 - 5 -6 = 654
    answer 9 -> 7 -> 5
    return the head (9)
*/


/*

    Write a function that takes in a base and a n and returns the result of the base 
    to the power of n. Optimize for time complexity.   

*/

/*

    Given a string of words separated by spaces, write a function that will 
    return the words in reverse, maintaining the same number of 
    spaces between words as in the original string

*/

/*

    given an array of integers and a target integer return the number of pairs in 
    the array that sum to the target number. repeats of the same number count as separate integers

*/

/*

    Given a 2D board and a word, find if the word exists in the grid.
    The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
    Example:
    board =
    [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
    ]
    Given word = "ABCCED", return true.
    Given word = "SEE", return true.
    Given word = "ABCB", return false.
*/

/*
    given sorted array, make a balanced BST.    
*/

/*
    Given an array of integers which may or may not have duplicates. 
    Return array of all numbers that occur with highest frequency. 
*/

/*

    Design a system that takes in a randomly ordered stream of integers from 1..k. 
    Print numbers in sequential order as they come in. Ex [1,2,4,5,3] -> 
    Print 1 and 2 immediately, store 4 and 5 in a set and wait next expected integer (3).
     When 3 arrives, print it and the 4 and 5 that have been saved.

*/


/*
    populating-next-right-pointers-in-each-node/

     https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
    Use queue and BFS approach to connect nodes to their right neighbors

*/

/*
    Print each level in a binary tree
*/

/*
    Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

    Example 1:
    Input: [[0, 30],[5, 10],[15, 20]]
    Output: 2

    Example 2:
    Input: [[7,10],[2,4]]
    Output: 1
*/

/*

    Given two, unsorted arrays (which may or may not be empty, consisting only of 
    non-negative integers), return a single, sorted array containing all the elements of the two input arrays.

*/

/*
    Given a string of digits, return all the combinations of letters those numbers represent on a  phone's touchpad:

    e.g.
    2 => [ 'a', 'b', 'c' ]

    phoneNumberToString("23") => [ ad, ae, af, bd, be, bf, cd, ce, cf ]
*/


/*
    Design a raffle system that has the functionality to addPlayer(email), 
    removePlayer(email), and pickWinner(), all in constant time.
*/
/*

*/


// # Write a method uncompress that accepts a string as an argument. 
// # The string will be formatted so every letter is followed by a number. 
// # The method should return an "uncompressed" version of the string where every letter 
// # is repeated multiple times given based on the number that appears directly after the letter.



function uncompress(string){
    let newStr = "";
    for(let i = 0; i < string.length-1; i+= 2){
        let ele = string[i];
        let num = parseInt(string[i+1]);

        let j = 0; 
        while(j < num){
            newStr += ele
            j++
        }

    }

    return newStr
}

// console.log(uncompress('a2b4c1'));
// console.log(uncompress('b1o2t1'));
// console.log(uncompress('x3y1x2z4'));

// # Examples

// # p uncompress('a2b4c1') # 'aabbbbc'
// # p uncompress('b1o2t1') # 'boot'
// # p uncompress('x3y1x2z4') # 'xxxyxxzzzz'


// Reverse version 

function compress(string){
    let newStr = "";
    let count = 0; 

    for(let i = 0; i < string.length; i++){
        count++

        if(string[i] !== string[i+1]){
            let num = count.toString();
            newStr += string[i] + num
            count = 0
        }
    }

    return newStr;
}

// console.log(compress("aabbbbc"));

// aabbbbc => a2b4c1;


// Given a 2D integer array board representing the grid of candy, 
// different positive integers board[i][j] represent different types of candies. 
// A value of board[i][j] = 0 represents that the cell at position (i, j) is empty. 
// The given board represents the state of the game following the player's move. 
// Now, you need to restore the board to a stable state by crushing candies according to 

// the following rules:
// If three or more candies of the same type 
// are adjacent vertically or horizontally, "crush" them all at the same time - 
// these positions become empty.
// After crushing all candies simultaneously, 
// if an empty space on the board has candies on top of itself, 
// then these candies will drop until they hit a candy or bottom at the same time.
//  (No new candies will drop outside the top boundary.)
// After the above steps, there may exist more candies that can be crushed. 
// If so, you need to repeat the above steps.
// If there does not exist more candies that can be crushed (ie. the board is stable), 
// then return the current board.
// You need to perform the above rules until the 
// board becomes stable, then return the current board.
 
// Example:
// Input:
let board = [
  [110, 5, 112, 113, 114],
  [210, 211, 5, 213, 214],
  [310, 311, 3, 313, 314],
  [410, 411, 412, 5, 414],
    [5, 1, 512, 3, 3],
  [610, 4, 1, 613, 614],
  [710, 1, 2, 713, 714],
  [810, 1, 2, 1, 1],
    [1, 1, 2, 2, 2],
  [4, 1, 4, 4, 1014],
];
    
// Output:
// [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],
// [210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],
// [610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]

function candyCrush(board){
    if(!board)return board;

    let done = true; 

    // TAG ROWS 
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length - 2; j++){
            let num1 = Math.abs(board[i][j]);
            let num2 = Math.abs(board[i][j+1]);
            let num3 = Math.abs(board[i][j+2])

            if((num1 === num2 && num2 === num3) && num1 !== 0){
                board[i][j] = -num1;
                board[i][j+1] = -num2;
                board[i][j+2] = -num3;
                done = false
            }
        }
    }

    // TAG COLS 
    for(let i = 0; i < board[0].length; i++){
        for(let j = 0; j < board.length-2; j++){
            let num1 = Math.abs(board[i][j]);
            let num2 = Math.abs(board[i+1][j]);
            let num3 = Math.abs(board[i+2][j]);

            if (num1 === num2 && num2 === num3 && num1 !== 0) {
              board[i][j] = -num1;
              board[i+1][j] = -num2;
              board[i+2][j] = -num3;
              done = false;
            }
        }
    }

    // GRAVITY 

    for(let j = 0; j < board[0].length; j++){

        let idx = board.length - 1;

        for(let i = board.length-1; i >= 0; i--){
            if(board[j][i] > 0){
                board[idx--][j] = board[i][j]
            }
        }

        while(idx >= 0){
            board[idx--][j] = 0;
        }
    }

    return done ? candyCrush(board) : board;
}

console.log(candyCrush(board));