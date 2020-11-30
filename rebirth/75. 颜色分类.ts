/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // 三路快排
  let zero = -1; // 0-zero === 0
  let two = nums.length; // two-(nums.length-1) === 2

  for(let i = 0; i < two;) {
    const val = nums[i];

    if (val === 1) {
      i++;
    } else if (val === 2) {
      two--;
      [nums[two], nums[i]] = [nums[i], nums[two]];
    } else if (val === 0) {
      zero++;
      [nums[++zero], nums[i++]] = [nums[i], nums[zero]];
      i++;
    }
  }
};