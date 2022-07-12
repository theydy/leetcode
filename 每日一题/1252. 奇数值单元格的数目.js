/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
  // m * n，indices[i] = [ri, ci]
  // 两个数组分别表示列和行在 indices 中出现的次数 r[] c[]
  // 某个点 [x, y] 的值会等于 r[y] + c[x]
  // 对于整个 r[] c[]，分别计算奇偶数，r[] 偶 * c[] 奇 + r[] 奇 * c[] 偶

  const r = new Array(m).fill(0)
  const c = new Array(n).fill(0)

  for(let i = 0; i < indices.length; i++) {
    const [ri, ci] = indices[i]

    r[ri]++
    c[ci]++
  }

  let oddR = 0
  let oddC = 0
  let evenR = 0
  let evenC = 0

  for(let i = 0; i < r.length; i++) {
    if (r[i] % 2) {
      oddR++
    } else {
      evenR++
    }
  }

  for(let i = 0; i < c.length; i++) {
    if (c[i] % 2) {
      oddC++
    } else {
      evenC++
    }
  }

  return oddR * evenC + evenR * oddC
};