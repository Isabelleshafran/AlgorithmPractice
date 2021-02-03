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
                    console.log('last one');
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

console.log(getMergedIntervals(intervals));





