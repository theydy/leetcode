const checkPalindrome = (mapping, s, i, j) => {
  if (mapping[i][j] !== null) {
    return mapping[i][j];
  } else if (s[i] === s[j]) {
    return checkPalindrome(mapping, s, i + 1, j - 1);
  } else {
    return false;
  }
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  let mapping = new Array(len);
  let start = 0, end = 0;
  for (let i = 0; i < len; i++) {
    mapping[i] = new Array(len).fill(null);
    mapping[i][i] = true;
    if (i < len - 1 && s[i] === s[i + 1]) {
      mapping[i][i + 1] = true;
      start = i;
      end = i + 1;
    }
  }
  for (let i = 2; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      mapping[j][i + j] = checkPalindrome(mapping, s, j, i + j);
      if (mapping[j][i + j] && i >= end - start) {
        start = j;
        end = i + j;
      }
    }
  }
  return s.slice(start, end + 1);
};