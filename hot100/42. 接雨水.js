/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
  // 1. 分层计算，每次计算高度 1 时有多少雨水，然后数组 -1，计算下一层
  // 只要存在两个不相邻的非 0 数，就存在雨水 i - j - 1 个

  // let res = 0
  // let flag = true
  
  // function caclOne () {
  //   let start = -1
  //   for(let i = 0; i < height.length; i++) {
  //     if (height[i]) {
  //       if (start >= 0) {
  //         const val = i - start - 1
  //         if (val > 0) {
  //           res += val
  //         }
  //       }
  //       start = i
  //       height[i]--

  //       if (height[i]) {
  //         flag = true
  //       }
  //     }
  //   }
  // }

  // while (flag) {
  //   flag = false
  //   caclOne()
  // }

  // return res

  // 2. 每个 height[i] 格所能接的雨水是这格左最大值 height[0...i-1] 和右最大值 height[i+1...length]
  // 中较小的那个减去 height[i] 本身。
  // eg [0,1,0,2,1,0,1,3,2,1,2,1] 所对应的每格存雨水量是 [0,0,Math.min(1, 3) - 0,Math.min(1, 3) - 2 < 0 ? 0, Math.min(2, 3) - 1...]
  let res = 0

  const left = []
  const right = []

  left[0] = 0
  for(let i = 1; i < height.length; i++) {
    left[i] = Math.max(left[i - 1], height[i - 1])
  }

  right[height.length - 1] = 0
  for(let i = height.length - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i + 1])
  }

  for(let i = 0; i < height.length; i++) {
    const val = Math.min(left[i], right[i]) - height[i]
    if (val > 0) {
      res += val
    }
  }

  return res
};