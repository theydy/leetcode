let dfs = function (nums, res, cur) {
  if (cur.length === nums.length) {
    res.push([...cur]);
    return;
  }

  for(let i = 0; i < nums.length; i++) {
    if (cur.indexOf(nums[i]) === -1) {
      cur.push(nums[i]);
      dfs(nums, res, cur);
      cur.pop();
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  let cur = [];
  dfs(nums, res, cur);
  return res;
};