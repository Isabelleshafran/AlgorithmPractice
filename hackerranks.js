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

    // console.log(grid);

    for(let i = 0; i < totalRow; i++){
        for(let j = 0; j < totalCol; j++){
            if(grid[i][j] === '.'){
                count += 1; 
                grid[i][j] = '#'
                // console.log(grid);
                // console.log(count);
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



console.log(reachTheEnd(grid, 5));