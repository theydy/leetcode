/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  // 最长有效括号

  // dp 记录剩余的左括号， i,j 表示匹配的左右下标，dp[][] 不能是负数
  const dp = []
  let res = 0

  for(let i = 0; i < s.length; i++) {
    for(let j = i; j < s.length; j++) {

      const temp = s[j] === '(' ? 1 : -1

      if (i === j) {
        dp[j] = temp
      } else {
        dp[j] = dp[j - 1] + temp
      }

      if (dp[j] < 0) break

      if (res < (j - i + 1) && dp[j] === 0) {
        res = j - i + 1
      }
    }
  }

  return res
};