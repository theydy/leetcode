/**
 * 
 * @param W 物品重量
 * @param V 物品价值
 * @param C 背包大小
 */
function Knapsack01(W: number[], V: number[], C: number): number {
  const length = W.length;
  const memo: number[] = [];

  for(let i = 0; i <= C; i++) {
    memo[i] = i > W[0] ? V[i] : 0;
  }

  // 关键：x -> 选取的物品 index 下标，y -> 背包容量
  for(let i = 1; i < length; i++) {
    for(let j = C; j >= W[i]; j--) {
      memo[j] =  Math.max(memo[j], V[i] + memo[j - W[i]]);
    }
  }
  
  return memo[C];
}