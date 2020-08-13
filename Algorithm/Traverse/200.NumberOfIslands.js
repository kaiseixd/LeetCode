/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        traverse(grid, i, j);
        count++;
      }
    }
  }
  return count;
};

function traverse(grid, i, j) {
  if (!grid[i] || !grid[i][j]) return;
  if (grid[i][j] === '1') {
    grid[i][j] = '0';
    traverse(grid, i + 1, j);
    traverse(grid, i, j + 1);
    traverse(grid, i - 1, j);
    traverse(grid, i, j - 1);
  }
}