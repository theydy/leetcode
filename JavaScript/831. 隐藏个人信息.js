var emailCheck = function (S) {
  var email = new RegExp('^([a-zA-Z]{2,})@([a-zA-Z]{2,})\.([a-zA-Z]{2,})$');
  var res = email.exec(S.toLowerCase());
  if (res) {
    return `${res[1].slice(0, 1)}*****${res[1].slice(-1)}@${res[2]}.${res[3]}`;
  }
}

var phoneCheck = function (S) {
  var phone = new RegExp('\\d', 'g');
  var valid = /^[+)(\d- ]+$/;
  if (valid.exec(S)) {
    var number = S.match(phone);
    var str = '';
    if (number.length > 10) {
      str = number.slice(0, number.length - 10).reduce((acc, x) => acc + '*', '+');
      str += '-';
    }
    str += `***-***-${number.slice(-4).join('')}`;
    return str;
  }
}

/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function(S) {
  return emailCheck(S) || phoneCheck(S);
};