/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  // (r - l) * Math.min(n[l], n[r]) 要最大
  // r 和 l 两个指针，n[] 小的往中间移
  
  let n = height
  let l = 0
  let r = n.length - 1
  let res = 0

  while(l < r) {
    res = Math.max(res, (r - l) * Math.min(n[l], n[r]))

    if (n[l] < n[r]) {
      l++
    } else {
      r--
    }
  }

  return res
};