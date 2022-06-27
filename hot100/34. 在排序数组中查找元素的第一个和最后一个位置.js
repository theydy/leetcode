/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // 二分找到 target, 然后左右往两边找相同的
  let res = [-1, -1]
  const findTarget = function(l, r) {
    if (l > r) return
    // 0 1 2 3
    const mid = Math.floor((l + r) / 2)

    if (nums[mid] === target) {
      res = [mid, mid]
      while (nums[res[0] - 1] === target) {
        res[0]--
      }
      while (nums[res[1] + 1] === target) {
        res[1]++
      }
    } else if (nums[mid] > target) {
      findTarget(l, mid - 1)
    } else {
      findTarget(mid + 1, r)
    }
  }

  findTarget(0, nums.length - 1)

  return res

};
