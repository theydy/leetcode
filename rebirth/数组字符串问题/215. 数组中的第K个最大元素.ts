function findKthLargest(nums: number[], k: number): number {
  const index = nums.length - k;
  const quick = (nums: number[], left: number, right: number) => {
    if (right - left <= 2) return;

    let l = left;
    let r = right;
    let i = l + 1;
    let v = nums[i];

    while( i < r) {
      if (nums[i] < v) {
        l++;
        [nums[i], nums[l]] = [nums[l], nums[i]];
        i++;
      } else if (nums[i] > v) {
        r--;
        [nums[i], nums[r]] = [nums[r], nums[i]];
      } else {
        i++;
      }
    }
    if (r <= index) {
      quick(nums, r - 1, right);
    } else {
      quick(nums, left, l + 1);
    }
  }

  quick(nums, -1, nums.length);

  return nums[index];
};