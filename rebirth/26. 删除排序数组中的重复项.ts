  function removeDuplicates(nums: number[]): number {
    let k = 0;
    let cur: number | null = null;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== cur) {
        cur = nums[i]
        nums[k++] = cur;
      }
    }

    return k;
  };