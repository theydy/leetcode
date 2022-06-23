/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 返回合为 target 的两个整数的数组下标
  
  // 看 target - num[] 剩余的这个值在不在 nums 里
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const last = target - nums[i]

    if (map.has(last)) {
      return [map.get(last), i]
    } else {
      map.set(nums[i], i)
    }
  }

};