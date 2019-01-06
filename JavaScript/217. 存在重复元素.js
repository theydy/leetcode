/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const has = {};
  let item;
  for (let i = 0; i < nums.length; i++) {
    item = nums[i];
    if (has[item]) {
      return true;
    }
    has[item] = true;
  }
  return false;
};