// For a given string, there will be different types of parentheses: {}, (), and []. 
// Return true or false if the string is balanced properly. 
// All opening parenthesis must be closed with its respective closing parenthesis and in order.



function balanced(string){
    const stack = [];
    let dictionary = [")}]"]

    for(let i = 0; i < string.length; i++){
        let currentChar = string[i];

         if(dictionary.includes(currentChar)){
             switch (currentChar) {
               case "(":
                 stack.push(")");
                 break;
               case "{":
                 stack.push("}");
                 break;
               case "[":
                 stack.push("]");
                 break;
               default: 
                     let topElement = stack.pop()
                     if (currentChar !== topElement) return false;

         }
            // topElement = stack.pop();
            // if(currentChar !== topElement) return false
        }
    }

    return stack.length === 0
}


// console.log(balanced('[hello]38{}'));

// stack = [")]["]
// currentChar = "["
// topElement = "["

// For a given array of numbers, return the pair of numbers with the least absolute difference.

// Input: arr = [4, 2, 1, 3];
// Output: [
//   [1, 2],
//   [2, 3],
//   [3, 4],
// ];

// Input: arr = [1, 3, 6, 10, 15];
// Output: [[1, 3]];

function leastAbsoluteDifference(array){
   let result = [];
   minNum = Number.MAX_SAFE_INTEGER;
   array.sort((a,b) => a-b);


   for(let i = 0; i < array.length-1; i++){
       let difference = array[i+1] - array[i];

       if(difference < minNum){
           result = [[array[i], array[i+1]]]
           minNum = difference
       } else if (difference === minNum){
           result.push([array[i], array[i+1]])
       }
   }

   return result
}

// Given two, unsorted arrays (which may or may not be empty, 
// consisting only of non-negative integers), return a single, sorted array 
// containing all the elements of the two input arrays.


function sort(array1, array2){
    let sorted1 = array1.sort((a,b) => a-b)
    let sorted2 = array2.sort((a, b) => a - b);

    let merged = [];

    while(sorted1.length && sorted2.length){
        if(sorted1[0] <= sorted2[0]){
            merged.push(sorted1.shift())
        } else {
            merged.push(sorted2.shift())
        }
    }

    return merged.concat(sorted1).concat(sorted2)
}

let array1 = [5, 7, 1, 13, 2, 7]
let array2 = [45, 6, 13, 2, 3, 9]

// console.log(sort(array1, array2));

/* 
    Given an array of meeting time intervals consisting of start and end 
    times [[s1, e1],[s2,e2,],… where si < ei, find the minimum number of 
    conference rooms required.

  Example 1:
  Input: [[0, 30],[5, 10],[15, 20]] 
  Output: 2

  Example 2:
  Input: [[2,4],[7,10]] 
  Output: 1

*/

// find number of overlapping times 
// first need to sort it 

function roomCount(array){
    let sorted = array.sort((a,b) => a[0]-b[0])
    let count = 1; 

    for(let i = 0; i < sorted.length-1; i++){
        let current = sorted[i];
        let next = sorted[i+1];

        if(!(current[0] < next[0] && current[1] < next[0])) {
            count += 1;
        } 
    }

    return count; 
}

// console.log(
//   roomCount([
//     [0, 30],
//     [5, 10],
//     [15, 20],
//   ])
// );


// Is the number a palindome 

function isPalindome(num){
    let string = num.toString();

    for (let index = 0; index < string.length; index++) {
        const element1 = string[index];
        const element2 = string[string.length -1 - index];

        if(element1 !== element2) return false
    }
    return true;
}

// console.log(isPalindome(1213))


