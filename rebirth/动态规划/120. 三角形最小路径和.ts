function minimumTotal(triangle: number[][]): number {
  let dp: number[][] = [];
  const length = triangle.length;
  
  for(let i = 0; i < length; i++) {
    dp[i] = [];
  }
  
  dp[0][0] = triangle[0][0];

  for(let i = 1; i < length; i++) {
    for(let j = 0; j < triangle[i].length; j++) {
      let m = dp[i - 1][j] !== undefined ? dp[i - 1][j] : Infinity;
      let n = dp[i - 1][j - 1] !== undefined ? dp[i - 1][j - 1] : Infinity;
      dp[i][j] = Math.min(m, n) + triangle[i][j];
    }
  }
  return Math.min(...dp[length - 1]);
};