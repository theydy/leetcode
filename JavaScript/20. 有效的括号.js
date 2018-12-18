/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let list;
  let left = ['(', '{', '['],
      right = [')', '}', ']'];
      
  if (s === '') {
    return true;
  }

  list = s.split('');

  for (let i in list) {
    let item = list[i];
    if (left.includes(item)) {
      stack.push(item);
    } else {
      let last = stack.pop();
      if (!(left.indexOf(last) === right.indexOf(item))) {
        return false;
      }
    }
  };
  return stack.length ? false : true;
};