/**
 * 数学？不知道为啥，直觉上感觉应该尽量等分最后乘积最大，也能过。。。
 * i 是允许的份数，最小 2 份，最多 n 份，每份 1。
 * mod 余数应该尽量分给多的份数，所以每份 +1。
 * 所以最后就是 (mod 个 (part + 1) 相乘) * ( (i - mod) 份 part 相乘)
 */
// function integerBreak(n: number): number {
//   let res = 0;

//   for(let i = 2; i <= n; i++) {
//     const part = Math.floor(n / i);
//     const mod = n % i;

//     res = Math.max(Math.pow(part + 1, mod) * Math.pow(part, i - mod), res);
//   }

//   return res;
// };

/**
 * 
 * dp 数组存的是 index 下标拆分至少两份最大乘积，
 * 从小往大推，j 是可以先分割出一份的值，
 * 因为 dp 存的结果是至少两份，dp[i - j]、j 这里最少有三份，所以，实际取最大值还需要加上 (i - j)、j 这种两份的情况。
 */
function integerBreak(n: number): number {
  const dp: number[] = [0, 1, 1];

  for(let i = 3; i <= n; i++) {
    for(let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i - j] * j, (i - j) * j, dp[i] || -Infinity);
    }
  }

  return dp[n];
}