
const numIslands = (grid) => {
   if(grid.length === 0) return 0; 
    const totalRow = grid.length; 
    const totalCol = grid[0].length; 
    let res = 0;
    
    for(let i = 0; i < totalRow; i++){
        for(let j = 0; j < totalCol; j++){
            if(grid[i][j] === '1'){
                res += 1;
                dfs(grid, i, j, totalRow, totalCol)
            }
        }
    }
    
    return res;
    
};

const dfs = (grid, row, col, totalRow, totalCol) => {
    if(row < 0 || col < 0 || row === totalRow || col === totalCol || grid[row][col] === '0') {
        return; 
    }
    
    grid[row][col] = '0';
    dfs(grid, row - 1, col, totalRow, totalCol);
    dfs(grid, row + 1, col, totalRow, totalCol);
    dfs(grid, row, col - 1, totalRow, totalCol);
    dfs(grid, row, col + 1, totalRow, totalCol);
    
    
}

// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands 
// horizontally or vertically. You may assume all four edges of the grid 
// are all surrounded by water.

// Input: grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];
// Output: 1;


// Input: grid = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ];
// Output: 3;