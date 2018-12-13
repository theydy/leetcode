/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  var str = String(x);
  return str === str.split('').reverse().join('') ? true : false;
};