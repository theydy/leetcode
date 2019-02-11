/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const res = [];
  const num = Math.pow(2, n);

  for(let i = 0; i < num; i++) {
    res.push(i ^ (i >> 1));
  }
  return res;
};