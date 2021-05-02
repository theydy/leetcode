function rob(nums: number[]): number {
  const dp: number[] = [];
  const length = nums.length;

  dp[length - 1] = nums[length - 1];
  dp[length - 2] = nums[length - 2];

  for(let i = length - 3; i >= 0; i--) {
    dp[i] = 0;
    for(let j = i + 2; j < length; j++) {
      dp[i] = Math.max(nums[i] + dp[j], dp[i]);
    }
  }

  return Math.max(...dp);
};