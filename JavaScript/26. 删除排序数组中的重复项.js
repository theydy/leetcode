/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let len = 0;
  let cur = null;
  nums.forEach(item => {
    if (item !== cur) {
      cur = item;
      nums[len++] = item;
    }
  });
  return len;
};