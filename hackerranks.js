//two strings are said to be the same if they are of the same length and same
// char at each idx. 

// Give two strings determine if the two are equal. '#' reps backspace 

function compareStrings(s1, s2) {
  let array1 = backspaced(s1)
  let array2 = backspaced(s2);

  let obj = {};

  array1.forEach(char => {
      if(!obj[char]){
          obj[char] = 1
      } else {
          obj[char] += 1
      }
  })

    array2.forEach((char) => {
      if (!obj[char]) {
        obj[char] = 1;
      } else {
        obj[char] -= 1;
      }
    });

    if (Object.values(obj).every((el) => el === 0)){
      return 1;
    } else {
      return 0;
    }
  
}

function backspaced(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    if ((string[i] !== "#")) {
      array.push(string[i]);
    } else {
      array.pop()
    }
  }

  return array
}



// a 2-D grid consistening of some blocked represented at '#' and some unblocked
// represented as '.' cell is given. The starting position ofa  pinter is in the top-left corner of the grid 
// it is gauranteerd that the startign position is an unblocked cell. 
// Its also guaranteed that the bottom-right cell is unblocked. Each cell of the grid 
// is connected with itis right, left, top and bottom cells. it takes 
// 1 second for a pointer to move form a cell to its adjacent cell. 
// if the pointer can reach the bottom corner of the grid within k-seconds, 
// return the string yes. otherwise, No.

// examples: 

// rows = 3
// grid = ["..#", "#.##", "#.."]
// max Time is 5

let grid = [
    '..##', 
    '#.##', 
    '#...'
]

// it will take the pointer 5 seconds to reach the bottom right as long as k >= 5
// return Yes. 

function reachTheEnd(grid, maxTime){
    if(grid.length === 0) return 0;
    let totalRow = grid.length;
    let totalCol = grid[0].length;
    let count = -1; 

    for(let i = 0; i < grid.length; i++){
        grid[i] = grid[i].split('')
    }

    for(let i = 0; i < totalRow; i++){
        for(let j = 0; j < totalCol; j++){
            if(grid[i][j] === '.'){
                count += 1; 
                grid[i][j] = '#'
                if((i === totalRow-1) && (j === totalCol-1)){
                    // console.log('last one');
                    if (count <= maxTime) {
                        return "Yes";
                    } else {
                        return "No";
                    }
                }

                if(checkSurrounding(grid, i, j, totalRow, totalCol) === false){
                    return 'No'
                }
            }
        }
    }

    return 'No'

}

function checkSurrounding(grid, row, col, totalRow, totalCol){
    if(isPeriod(grid, row-1, col, totalRow, totalCol)) {
        return true
    }
    if (isPeriod(grid, row + 1, col, totalRow, totalCol)) {
        return true;
    }
    if (isPeriod(grid, row, col - 1, totalRow, totalCol)) {
        return true;
    }
    if (isPeriod(grid, row, col + 1, totalRow, totalCol)) {
        return true;
    }

    return false
}

function isPeriod(grid, row, col, totalRow, totalCol){
    if(row < 0 || col < 0){
        return false; 
    }

    if(row >= totalRow){
        return false;
    }

    if(col >= totalCol){
        return false;
    }

    if(grid[row][col] !== '.'){
        return false;
    }

    return true;
}


// console.log(reachTheEnd(grid, 5));


// Given a collection of time intervals, [start, end], merge and return the over
// lapping intervals sroted in ascending order of start time. 

// return in ascending order 

// let intervals = [
//   [7, 7],
//   [2, 3],
//   [6, 11],
//   [1, 2],
// ];

//Example 1:

// let intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// let intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.


function getMergedIntervals(intervals) {
  let sortedArray = intervals.sort((a, b) => a[1] - b[1]);
  let finalArray = [];

  for (let i = 0; i < sortedArray.length-1; i++) {
    let interval = sortedArray[i]; 
    let nextInterval = sortedArray[i + 1]

    if(interval[0] < nextInterval[0] && interval[1] < nextInterval[0]) {
        finalArray.push(interval, nextInterval)
    } else {
        finalArray.push(minmax(interval, nextInterval))
        i+=1
    }
  }

  return finalArray;
}

function minmax(arr1, arr2) {
    let newArr = arr1.concat(arr2)

    let min = Math.min(...newArr)
    let max = Math.max(...newArr);

    let final = []; 
    final.push(min)
    final.push(max)

    return final
}

// console.log(minmax([1, 3], [2,6]));

// console.log(getMergedIntervals(intervals));

// COMPETITIVE GAMING 
/*
    A group of friend are playing a video game together. During the game, 
    each player earns a number of points. At the end of a round, players 
    who achieve at least a certain rank get to "level up" their characters. 
    Given the scores of the players at the end of the round, how many players
    will be able to level up?

    Note: when players with equal scores will have equal ranks, but the player
    with the next lowest score will be ranked based on the position within the 
    list of all players scores. EX: if there are four players and three tie for 
    first place, their ranks are 1, 1, 1, 4

    Note: no player with score 0 can level up, regardless of rank 

    Example: 
    n = 4
    k = 3
    scores = [100, 50, 50, 25]

    these players ranks are [1, 2, 2, 4]. Beacuse the players neeed to have a rank 
    of at least 3, only 3 level up. So the answer is 3. 
*/

function numPlayers (k, scores) {
    let sortedScores = scores.sort((a, b) => b - a);
    let ranks = [1];
    let place = 1;

    for (let i = 1; i < sortedScores.length; i++) {
        if (sortedScores[i] < sortedScores[i - 1] && sortedScores[i] !== 0) {
            place = i + 1;
            ranks.push(place);
        } else if (sortedScores[i] === sortedScores[i - 1] && sortedScores[i] !== 0) {
            ranks.push(place);
        }
    }
    
    let count = 0;
    ranks.forEach(rank => {
        if (rank <= k) {
            count += 1;
        }
    })

    return count;
} 

let k = 3; 
let scores = [100, 50, 30, 20]
// console.log(numPlayers(k, scores));




// Scatter Palindrome 

function findPermutations(string){
    if(string.length <= 1) return string; 
    let permutations = [];

    for(let i = 0; i < string.length; i++){
        let char = string[i];

        if(permutations.indexOf(char) !== -1) continue;

        let remainingChars = string.slice(0, i) + string.slice(i+1);

        for(let permutation of findPermutations(remainingChars)){
            permutations.push(char + permutation)
        }
    }

    return permutations;
}

function reverse(string){
    return string.split('').reverse().join('')
}

function subStrings(string){
    let subs = [];

    for(let i = 0; i < string.length; i++){
        for(let j = i; j < string.length; j++){
            let sub = string.slice(i, j+1);

            subs.push(sub)
        }
    }

    return subs;
}

function isScatterPerm(string) {
    let perms = findPermutations(string)
    
    for(let i = 0; i < perms.length; i++){
        let current = perms[i];

        if(current === reverse(current)){
            return true;
        }
    }

    return false;
}

function scatterPalindrome(strToEvaluate) {
    let count = 0; 

    for(let i = 0; i < strToEvaluate.length; i++){
        let string = strToEvaluate[i];
        let allSubStrings = subStrings(string);

        for (let i = 0; i < allSubStrings.length; i++) {
          let current = allSubStrings[i];

          if (isScatterPerm(current)) {
            count++;
          }
        }
    }

    return count;
}

// ['aabb'] => 9
// ['bbrrg'] => 12

//  console.log(scatterPalindrome(["bbrrg"]));


// First Unique Char; 

function firstUniqueChar(string){
    let obj = {};

    string.split('').forEach(char => {
        if(!obj[char]) {
            obj[char] = 1
        } else {
            obj[char] += 1
        }
    })

   for(let i = 0; i < string.length; i++){
       let current = string[i];

       if(obj[current] === 1){
           return i+1;
       }
   }

   return -1;
}

// console.log(firstUniqueChar("statistics"));


// Throttling Gateway 

function droppedRequests(requestTime) {
    let dropped = 0;

    for(let i = 0; i < requestTime.length; i++){

        if(i > 2 && (requestTime[i] === requestTime[i-3])){
            dropped++
        } else if (i > 19 && (requestTime[i] - requestTime[i-20]) < 10) {
            dropped++
        } else if (i > 59 && (requestTime[i] - requestTime[i - 60]) < 60){
            dropped++
        }
    }

    return dropped
}


 
let requestTime = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 11, 11, 11, 11]

// console.log(droppedRequests(requestTime))

// returns 7


// Songs 

// Whole Minute Dilema

//[40, 60, 20] === 1
// [10, 50, 90, 30] === 2

// how many combos equal a multiple of 60 

function playlist(songs) {
//   let count = 0;

//   for (let i = 0; i < songs.length; i++) {
//     for (let j = i + 1; j < songs.length; j++) {
//       if ((songs[i] + songs[j]) % 60 === 0) {
//         count++;
//       }
//     }
//   }
//   return count;
}

const numPairsDivisibleBy60 = (time) => {
  const appearDic = {};
  let ans = 0;
  time.forEach((el) => {

    const mod = el % 60;
    const left = (60 - mod) % 60;
    ans += appearDic[left] ? appearDic[left] : 0;
    appearDic[mod] = appearDic[mod] ? appearDic[mod] + 1 : 1;

  });

//   {10: 2, 20: 1, 40: 1} 
// ans = 1
  // console.log(appearDic);
  return ans;
};

// console.log(numPairsDivisibleBy60([10, 20, 10, 40, 50, 60, 70, 30]));

// ran into time complexity issue 


// Binary Number in a linked list 

// input is a binnary linked list and need to return the decimal num 
// 010011 to the num 

function getNumber(binary) {
  // Write your code here
  let string = "";
  let current = binary;

  while (current) {
    string += current.data;
    current = current.next;
  }
  return parseInt(string, 2);
}


// Monsoon Umbrellas 

/*
Umbrellas are available in diff sizes that are each able to shelter a certian 
number of people. Given the number of people needing shelting and a list of
umbrella sizes, determine the min number of umbreallas neccesary to cover exactly
the number of people given. If there is no combo return -1

requirement: 5
sizes = [3, 5]

return 1

requirement 7
sizes = [3, 5]

return -1;

*/

function getUmbrellas(requirement, sizes) {
  let count = Infinity;

  for (let i = 0; i < sizes.length; i++) {
    let current = sizes[i];

    if (requirement % current === 0) {
      let currentCount = requirement / current;
      if (currentCount < count) {
        count = currentCount;
      }
    }
  }

  if (count !== Infinity) {
    return count;
  } else {
    return -1;
  }
}


const solve = (people, umbrellas) => {
  const biggerUmbrella = Math.max(...umbrellas);
//   5
  const remain = people % biggerUmbrella;
//   3 
  const peopleThatFit = Math.floor(people / biggerUmbrella);
//   1

  if (remain >= 1 && umbrellas.length === 1) {
    return -1;
  } else {
    const remainingUmbrellas = umbrellas.filter(
      (umbrella) => umbrella !== biggerUmbrella
    );
    // [3]
    return remain !== 0
      ? solve(remain, remainingUmbrellas) + peopleThatFit
      : peopleThatFit;
  }
};

// console.log(solve(8, [5, 3]));

// requirement = 8 
// sizes = [5, 3]

// this doesn't handle if there is a combination of mulitple diff sizes to = requirement 

function minimumMoves(arr1, arr2) {
  // Write your code here
  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    let current1 = arr1[i];
    let current2 = arr2[i];

    count += getDiffCount(current1, current2);
  }

  return count;
}

function getDiffCount(current1, current2) {
  // 123 // 321

  let count = 0;

  let str1 = current1.toString();
  let str2 = current2.toString();

  for (let i = 0; i < str1.length; i++) {
    let curr1 = parseInt(str1[i]);
    let curr2 = parseInt(str2[i]);

    count += Math.abs(curr1 - curr2);
  }

  return count;
}

// console.log(minimumMoves([123, 543], [321, 279]));

// console.log(getDiffCount(123, 321));

let markings = [
  [0,3], [0,5],[0,7]
  [1,6],[1,8],[1,9]
  [2,3],[2,5],[2,6]
]


function deviceNamesSystem(devicenames) {
  // Write your code here
  let obj = {};
  let unique = [];

  for (let i = 0; i < devicenames.length; i++) {
    let current = devicenames[i];
    if (!obj[current]) {
      obj[current] = 1;
      unique.push(current);
    } else {
      unique.push(current.concat(obj[current].toString()));
      obj[current] += 1;
    }
  }
  // return obj
  return unique;
}

let devicenames = ["switch", "tv", "switch", "tv", "switch", "tv"];

// console.log(deviceNamesSystem(devicenames));



function countTeams(skills, minPlayers, minLevel, maxLevel) {
  // Write your code here
  let potentialPlayers = meetRequirements(skills, minLevel, maxLevel);
  
}

function meetRequirements(skills, minLevel, maxLevel) {
  let set = new Set();

  for (let i = 0; i < skills.length; i++) {
    let curr = skills[i];
    if (curr >= minLevel && curr <= maxLevel) {
      set.add(curr);
    }
  }

  return set;
}

let skills = [12, 4, 6, 13, 5, 10];
let minPlayers = 3;
let minLevel = 4; 
let maxLevel = 10;

// console.log(meetRequirements(skills, minLevel, maxLevel));


// first increasing then decreasing 

function longestBitonicSubarray(arr) {
  let longest = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++){
      let sub = arr.slice(i, j+1);
      console.log(sub);
      if(isBitonic(sub) && sub.length > longest){
        longest = sub.length
      }
    }
  }
  return longest;
}


function isBitonic(array){
  for(let i = 0; i < array.length-1; i++){
    let curr = array[i];
    let next = array[i+1];

    if(next < curr){
      let first = array.slice(0, i+1);
      let second = array.slice(i+1)
      console.log(first, second);
      if(increasing(first) && decreasing(second)){
        return true
      }
    }
  }
  return false;
}

function increasing(array){
  for(let i = 0; i < array.length-1; i++){
    if(array[i+1] < array[i]) return false;
  }
  return true
}

function decreasing(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] > array[i]) return false;
  }
  return true;
}

// console.log(isBitonic([1, 2, 3, 6, 9]));
// console.log(longestBitonicSubarray([6,4,1,2,3,6,9]));


function getUniqueCharacter(s) {
  // Write your code here
  let charCounts = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!charCounts[char]) {
      charCounts[char] = 1;
    } else {
      charCounts[char] += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (charCounts[char] === 1) return i + 1;
  }

  return -1;
}


// Whole minute dilemma 

function playlist(songs) {
  let count = 0;
  let map = new Map();
  for (let i = 0; i < songs.length; i++) {
    let t = songs[i];
    const mod = t % 60;
    const poss = mod === 0 ? 0 : 60 - mod;

    count += map.get(poss) || 0;
    map.set(mod, (map.get(mod) || 0) + 1);
  }
  return count;
}


