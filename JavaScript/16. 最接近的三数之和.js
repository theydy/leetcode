/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => (a - b));
  let l, r, sum;
  let res = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    l = i + 1;
    r = nums.length - 1;
    while (l < r) {
      sum = nums[l] + nums[i] + nums[r];
      res = Math.abs(target - sum) < Math.abs(target - res) ? sum : res;
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        r--;
      } else {
        l++;
      }
    }
  }
  return res;
};