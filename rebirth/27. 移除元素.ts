function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      if (k !== i) {
        [nums[k], nums[i]] = [nums[i], nums[k]]
      }
      k++;
    }
  }

  return k;
};