// String compression 

function stringCompression(string) {
    let count = 0; 
    let compressed = "";

    for(let i = 0; i < string.length; i++){
        count += 1

        if(string[i] !== string[i+1]){
           compressed += string[i] + count; 
           count = 0;
        }
    }
    return compressed;
}

// console.log(stringCompression("aabcccccaaa"));


// anagrams 

function anagrams(str1, str2){
    let obj = {};
}

// median of sorted array 

// fibonacci recursive

// fibonacci non recrusive 

// palindrome

// binary tree is binary search tree 

// most frequent occurring elemnt tin array 

// implement hashmap 

// two arrays intoa  single array 

// given two strings find length of longest substring 

// egg drop 


//  Min length of subarray exceeding the target sum
        // example:
        // [1,2,3,4], target = 6,
        // then answer = 2 since sum of all elements of subarray [3,4] has sum>=6 and its length is minimum
        // and if [1,2,3,4], target = 12, then return **-1 **, since no subarray has sum>=12

// optimal path to collect all rocks
    // Given a 2D array, with arr[i][j] representing the number of rock at that location.
    // Find optimal path from location A to location B in a multi dimensional array such that a person can collect maximum amount of rocks

