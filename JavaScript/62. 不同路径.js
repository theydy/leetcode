/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const map = new Array(m);
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) {
        map[j] = 1;
      } else {
        map[j] = map[j] + map[j - 1];
      }
    }
  }
  return map[m - 1];
};