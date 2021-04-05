


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
