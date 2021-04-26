


function maxPathSum(board, p, q) {
  // Write your code here
  let pSum = findMaxSumP(board, p);
}

function findMaxSumP(board, p) {
  let sum = board[0][p];
  for (let i = 0; i < board.length - 1; i++) {
    for (let j = q; j < board[0].length - 1; j++) {
      let newPos = dfsP(board, i, j);
      sum += board[newPos[0]][newPos[1]];
      i = newPos[0];
      j = newPos[1];
    }
  }
  return sum;
}

function findMaxSumQ(board, q) {
  let sum = board[q][0];

  for (let i = q; i >= 0; i--) {
    for (let j = 0; j < board.length - 1; j++) {
      let newPos = dfsQ(board, i, j);
      sum += board[newPos[0]][newPos[1]];
      i = newPos[0];
      j = newPos[1];
    }
  }
  return sum;
}

function dfsQ(board, i, j) {
  let potential1 = board[i - 1][j]; // board[1][1];
  let potential2;
  let potential3;

  if (j + 1 <= board[0].length) {
    potential2 = board[i - 1][j + 1];
  }

  if (j - 1 >= 0) {
    potential3 = board[i - 1][j - 1];
  }

  let max = Math.max(potential1, potential2, potential3);

  if (board[i + 1][j] === max) return [i + 1, j];
  if (board[i + 1][j + 1] === max) return [i + 1, j + 1];
  if (board[i + 1][j - 1] === max) return [i + 1, j - 1];
}

function dfsP(board, i, j) {
  let potential1 = board[i + 1][j]; // board[1][1];
  let potential2;
  let potential3;

  if (j + 1 <= board[0].length) {
    potential2 = board[i + 1][j + 1];
  }

  if (j - 1 >= 0) {
    potential3 = board[i + 1][j - 1];
  }

  let max = Math.max(potential1, potential2, potential3);

  if (board[i + 1][j] === max) return [i + 1, j];
  if (board[i + 1][j + 1] === max) return [i + 1, j + 1];
  if (board[i + 1][j - 1] === max) return [i + 1, j - 1];
}

let board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const isRobotBounded = function (instructions) {
  let dir = 0,
    x = 0,
    y = 0;
  for (let i of instructions) {
    if (i == "L") dir++;
    else if (i == "R") dir += 3;
    else {
      switch (dir % 4) {
        case 0:
          y++;
          break;
        case 1:
          x++;
          break;
        case 2:
          y--;
          break;
        case 3:
          x--;
          break;
      }
    }
  }
  return dir % 4 != 0 || (!x && !y);
};


// Question:
    // Convert an array of integers into an array of strings representing the phonetic equivalent of the
// integer.

// For example:
    // Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
    // Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.

function phoneticEq(array){
  let final = [];
  for(let i = 0; i < array.length; i++){
    let current = array[i]; 
    final.push(phoneNum(current));
  }
  return final.join(',');
}

function phoneNum(num){
  let numArray = num.toString().split('');
  let numDic = {
    "0": "Zero",
    "1": "One", 
    "2": "Two", 
    "3": "Three", 
    "4": "Four", 
    "5": "Five", 
    "6": "Six", 
    "7": "Seven", 
    "8": "Eight", 
    "9": "Nine"
  }

  let final = [];
  for(let i = 0; i < numArray.length; i++){
    let stringNum = numDic[numArray[i]]
    final.push(stringNum)
  }
  return final.join('');
}

console.log(phoneticEq([3, 25, 209]));
console.log(phoneticEq([10, 300, 5]));
