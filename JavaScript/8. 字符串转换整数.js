var toNumber = function (num, flag) {
  var max = 2147483647;
  var min = -2147483648;
  var positive = true,
    result = 0,
    limit = parseInt(-max / 10),
    limitLast = max % 10;
  if (flag === '-') {
    positive = false;
    limit = parseInt(min / 10);
    limitLast = -min % 10;
    num = num.slice(1);
  } else if (flag === '+') {
    num = num.slice(1);
  }
  // -max 还在min 的范围内，而-min 超出max 范围了，
  // 所以把正数全转为负数计算，最后在取 * -1 的值。
  for (var i = 0; i< num.length; i++) {
    var bitNum = parseInt(num[i]);
    if (
      result > limit ||
      (result === limit && bitNum <= limitLast)
    ) {
      result = result * 10 - bitNum;
    } else {
      return positive ? max : min;
    }
  }
  return positive ? -result : result;
}

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var s = str.trim();
  var regex = /^[+-\d]\d*/;
  var numStr = s.match(regex) ? s.match(regex)[0] : null;
  return numStr ? toNumber(numStr, numStr[0]) : 0;
};