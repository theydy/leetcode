/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 是否是有效的括号

  // 栈匹配
  const stack = []
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let i = 0; i < s.length; i++) {
    if (['(', '[', '{'].includes(s[i])) {
      stack.push(s[i])
    } else {
      const last = stack[stack.length - 1]
      if (map[last] === s[i]) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return !stack.length
};