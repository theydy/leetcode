const quickSort = (array, left, right, k) => {
  if (left >= right) {
    return;
  }
  let l = left;
  let r = right;
  let cur = array[l];

  while (l < r) {
    while (l < r && array[r] >= cur) {
      r--;
    }
    array[l] = array[r];
    while (l < r && array[l] <= cur) {
      l++;
    }
    array[r] = array[l];
  }
  array[l] = cur;
  l - 1 >= k && quickSort(array, left, l - 1, k);
  l + 1 <= k && quickSort(array, l + 1, right, k);
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  k = nums.length - k;
  quickSort(nums, 0, nums.length - 1, k);
  return nums[k];
};