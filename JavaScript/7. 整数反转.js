/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var max = 2147483647;
  var min = -2147483648;
  var rev = null;
  var t, num = x;
  if (num < 0) {
    max = min * -1;
    num = num * -1;
  }
  num = String(num).split('').reverse().join('');
  rev = parseInt(num.slice(0, -1));
  t = parseInt(max / 10)
  if (rev > t) {
    return 0;
  } else if (rev === t && parseInt(num.slice(-1)) > 7){
    return 0;
  } else {
    return x < 0 ? -parseInt(num) : parseInt(num);
  }
};