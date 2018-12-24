let mapping = {};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) {
    return n;
  } else if (!mapping[n]) {
    mapping[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return mapping[n];
};