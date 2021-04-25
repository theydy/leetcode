function findNumberOfLIS(nums: number[]): number {
  const len = nums.length;
  if (len === 0) return 0;
  
  const dp = new Array<number>(len).fill(1);
  const count = new Array<number>(len).fill(1);
  let max = 1;

  for(let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }
    max = Math.max(max, dp[i]);
  }

  return dp.reduce((acc, item, index) => {
    item === max && (acc += count[index]);
    return acc;
  }, 0);
};