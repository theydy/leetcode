/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  const s = N.toString(2);
  let start = null;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      start !== null && (res = Math.max(res, i - start));
      start = i;
    }
  }
  return res;
};