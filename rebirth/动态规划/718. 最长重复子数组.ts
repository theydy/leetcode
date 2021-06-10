function findLength(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;

  const dp: number[][] = [];

  for(let i = 0; i < m; i++) {
    dp.push([]);
  }
  let sum = -Infinity;

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      dp[i][j] = 0;
      if (nums1[i] === nums2[j]) {
        dp[i][j] = 1;
        if(i - 1 >= 0 && j -1 >= 0) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        }
      }

      sum = Math.max(sum, dp[i][j]);
    }
  }

  return sum
};