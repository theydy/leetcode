function removeDuplicates2(nums: number[]): number {
  let k = 0;
  let cur: number | null = null;
  let times = 0;

  const swap = (i: number) => {
    cur = nums[i]
    nums[k++] = cur;
  }

  for( let i = 0; i < nums.length; i++) {
    if (nums[i] !== cur) {
      times = 1;
      swap(i);
    } else if (times < 2) {
      times++;
      swap(i);
    }
  }

  return k;
  
};