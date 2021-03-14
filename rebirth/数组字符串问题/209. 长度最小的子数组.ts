function minSubArrayLen(target: number, nums: number[]): number {
  let l = 0;
  let r = -1;
  let sum = 0;
  let res = Infinity;

  while(l < nums.length) {
    if (r + 1 < nums.length && sum < target) {
      sum += nums[++r];
    } else {
      sum -= nums[l++];
    }

    if (sum >= target) {
      res = Math.min(r - l + 1, res);
    }

  }
  return res === Infinity ? 0 : res;
};