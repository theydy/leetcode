let checkNotInRes = function (a, res) {
  if (res.findIndex(
    (item) => JSON.stringify(item) === JSON.stringify(a)) === -1
  ) {
    return true;
  }
  return false;
}

let dfs = function (nums, res, cur, a = []) {
  res.push(a);

  for(let i = 0; i < nums.length; i++) {
    if (cur.indexOf(nums[i]) === -1) {
      cur.push(nums[i]);
      let a = [...cur];
      a.sort();
      if (checkNotInRes(a, res)) {
        dfs(nums, res, cur, a);
      }
      cur.pop();
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // dfs 巨慢，以后改成位运算吧
  let res = [];
  let cur = [];
  dfs(nums, res, cur);
  return res;
};