function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;
  
  const dp: number[] = [1];
  let max = 1;

  for(let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }

  return max;
};