/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let strMinLens = '';
  strMinLens = strs.reduce((acc, item) => item.length < acc.length ? item : acc, strs[0] || '');
  for (let i = 1; i <= strMinLens.length; i++) {
    let s1 = strMinLens.slice(0, i);
    for(let j = 0; j < strs.length; j++) {
      let s2 = strs[j].slice(0, i);
      if (s1 !== s2) {
        return strMinLens.slice(0, i - 1);
      }
    }
  }
  return strMinLens;
};