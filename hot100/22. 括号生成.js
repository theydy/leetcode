/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // 生成有效的括号对数

  // ['(', ')'] 深度优先，取 n * 2 的层数，所有有效的组合
  const strs = ['(', ')']
  const allowDept = n * 2
  const res = []

  function dfs(dept, path, lastLeft) {
    if (dept === allowDept) {
      !lastLeft && res.push(path)
      return
    }

    for(let i = 0; i < strs.length; i++) {
      // lastLeft 为匹配后剩余的左括号
      let lf = lastLeft
      if (i === 1 && !lf) {
        continue
      } else {
        if (i === 0) {
          lf++
        } else {
          lf--
        }
      }
      dfs(dept + 1, path + strs[i], lf)
    }
  }

  dfs(0, '', 0)

  return res
};