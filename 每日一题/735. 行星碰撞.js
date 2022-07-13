/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  // [-1, 1] 左右不会相撞，只有正数在前，负数在后才会撞。
  // 栈，同一个方向的入栈，碰到反方向的计算，最后栈中剩下的就是返回值

  const stack = []
  let i = 0

  while(i < asteroids.length) {
    const item = asteroids[i]

    if (!stack.length ) {
      stack.push(item)
      i++
    } else {
      const last = stack.pop()
      if (last < 0) {
        stack.push(last)
        stack.push(item)
        i++
      } else {
        if (sameDirt(last, item)) {
          stack.push(last)
          stack.push(item)
          i++
        } else {
          const maxAbs = getMaxAbs(last, item)
  
          if (maxAbs === null) {
            i++
          } else if (maxAbs === last) {
            stack.push(last)
            i++
          }
        }
      }
    }
  }

  return stack
};

function getMaxAbs(a, b) {
  if (Math.abs(a) > Math.abs(b)) {
    return a
  } else if (Math.abs(a) === Math.abs(b)) {
    return null
  } else {
    return b
  }
}

function sameDirt(a, b) {
  return (a > 0 && b > 0) || (a < 0 && b < 0)
}