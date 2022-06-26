/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  // 所有字母组合

  // 深度优先遍历
  const numsMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }

  const res = []

  function dfs(dept, str, char) {
    if (dept >= digits.length) {
      str && res.push(str)
      return
    }

    for(let i = 0; i < numsMap[char].length; i++) {
      dfs(dept + 1, str + numsMap[char][i], digits[dept + 1])
    }
  }

  dfs(0, '', digits[0])

  return res

};