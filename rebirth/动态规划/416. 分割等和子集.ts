function canPartition(nums: number[]): boolean {
  let sum = 0;
  const dp: boolean[] = [];

  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  if (sum % 2) return false;
  
  sum /= 2;


  for(let i = 0; i <= sum; i++) {
    dp[i] = nums[0] === i ? true : false;
  }

  for(let i = 1; i < nums.length; i++) {
    for(let j = sum; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }

  return dp[sum];
};