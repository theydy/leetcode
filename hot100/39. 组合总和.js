/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  // 先排序再深度优先搜索，找到所有符合的组合。

  candidates.sort((a, b) => a - b)
  const res = []

  function dfs(sum, idx, cur) {
    if (sum === target) {
      res.push(cur)
      return
    }

    for(let i = idx; i < candidates.length; i++) {
      if (sum + candidates[i] > target) break
      dfs(sum + candidates[i], i, [...cur, candidates[i]])
    }
  }

  dfs(0, 0, [])

  return res
};