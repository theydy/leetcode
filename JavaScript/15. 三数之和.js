/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => (a - b));
  const allres = [], has = {};
  for (let i = nums.length - 1; i >= 2; i--) {
    for (let j = 0, k = i - 1; j < k;) {
      let sum = nums[j] + nums[k];
      if (sum > -nums[i]) {
        k--;
      } else if (sum < -nums[i]) {
        j++;
      } else {
        const res = [nums[i], nums[j], nums[k]];
        const key = JSON.stringify(res.sort());
        if (!has[key]) {
          allres.push(...[res]);
          has[key] = true;
        }
        j++;
      }
    }
  }
  return allres;
};