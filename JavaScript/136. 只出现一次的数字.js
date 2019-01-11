/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0
  nums.map(i => (res = res ^ i));
  return res;
};