function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);

  for(let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return res;
    if (nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while(l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);

        while(l < r && nums[l] === nums[l + 1]) {
          l++;
        }

        while(l < r && nums[r] === nums[r - 1]) {
          r--;
        }

        l++;
        r--;
        
      } else if (sum > 0) {
        r--;
      } else {
        l++;
      }
    }
  }

  return res;
};