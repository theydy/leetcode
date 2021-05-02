/**
 * 
 * @param W 物品重量
 * @param V 物品价值
 * @param C 背包大小
 */
function Knapsack01(W: number[], V: number[], C: number): number {
  const length = W.length;
  const memo: number[][] = Array.from({ length }).map(_ => []);

  for(let i = 0; i < length; i++) {
    for(let j = 0; j <= C; j++) {
      if (i === 0) {
        memo[i][j] = j > W[i] ? V[i] : 0;
      } else {
        memo[i][j] = j >= W[i] ? Math.max(memo[i - 1][j], V[i] + memo[i - 1][j - W[i]]) : memo[i - 1][j];
      }
    }
  }
  
  return memo[length - 1][C];
}