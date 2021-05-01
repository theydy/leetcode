/**
 * 问题是从左上 -> 右下，求最小值，
 * 相当于从右下 -> 左上，求最小值。
 */
function minPathSum(grid: number[][]): number {
  const dp: number[] = [];
  const m = grid.length;
  const n = grid[0].length;

  dp[n - 1] = grid[m - 1][n - 1];
  for (let i = n - 2; i >= 0; i--) {
    dp[i] = dp[i + 1] + grid[m - 1][i];
  }

  for(let i = m - 2; i >= 0; i--) {
    for(let j = n - 1; j >= 0; j--) {
      if (j === n - 1) {
        dp[j] = dp[j] + grid[i][j];
      } else {
        dp[j] = Math.min(dp[j], dp[j + 1]) + grid[i][j];
      }
    }
  }

  return dp[0];
};