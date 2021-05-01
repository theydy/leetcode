/**
 * 这题从上向下走和从下向上走最终结果一样
 * 从上向下求最小路径和，需要处理边界问题，
 * 从下向上求最小路径和，无需处理边界问题。
 */

// function minimumTotal(triangle: number[][]): number {
//   let dp: number[][] = [];
//   const length = triangle.length;
  
//   for(let i = 0; i < length; i++) {
//     dp[i] = [];
//   }
  
//   dp[0][0] = triangle[0][0];

//   for(let i = 1; i < length; i++) {
//     for(let j = 0; j < triangle[i].length; j++) {
//       let m = dp[i - 1][j] !== undefined ? dp[i - 1][j] : Infinity;
//       let n = dp[i - 1][j - 1] !== undefined ? dp[i - 1][j - 1] : Infinity;
//       dp[i][j] = Math.min(m, n) + triangle[i][j];
//     }
//   }
//   return Math.min(...dp[length - 1]);
// };

function minimumTotal(triangle: number[][]): number {
  let dp: number[][] = [];
  const length = triangle.length;
  
  for(let i = 0; i < length; i++) {
    dp[i] = [];
    if (i === length - 1) {
      dp[i] = [...triangle[i]];
    }
  }
  
  // 从下往上走，最后一行最小值就是本身，所以从 length - 2 开始。
  for(let i = length - 2; i >= 0; i--) {
    for(let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return dp[0][0];
};