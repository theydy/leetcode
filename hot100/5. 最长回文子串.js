/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // 找到 s 中最长的回文子串，子串是连续的

  // s[i] 开始往两边扩散，
  // s[i] === s[i + 1] 时开始往两边扩散，
  let res = ''

  function check(l, r) {
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > res.length) {
        res = s.slice(l, r + 1)
      }
      l--
      r++
    }
  }

  for(let i = 0; i < s.length; i++) {
    check(i, i)
    check(i, i + 1)
  }

  return res
};