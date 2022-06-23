/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // s 中不含重复字符的最长子串。子串是连续的

  // 左右两个指针记录子串的左右起始下标，
  // res 记录的是找到的子串长度
  // 一个 map 记录当前使用的字符，如果有重复，更新 res 值，l++
  let l = 0
  let r = 0
  const map = new Map()
  let res = 0

  while(l < s.length && r < s.length) {
    if (map.has(s[r])) {
      map.delete(s[l])
      l++;
    } else {
      map.set(s[r], true)
      res = Math.max(res, r - l + 1)
      r++;
    }
  }

  return res
};