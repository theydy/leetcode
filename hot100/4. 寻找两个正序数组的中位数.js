/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 两个有序数组的中位数，O(log(m + n))

  // 如果是 O(m + n)，直接归并排序合并两个数组之后通过长度取中位数即可
  // let idx1 = 0
  // let idx2 = 0
  // let idx = 0
  // const num = []
  // while(idx1 < nums1.length && idx2 < nums2.length) {
  //   num[idx++] = Math.min(nums1[idx1], nums2[idx2])
  //   if (nums1[idx1] < nums2[idx2]) {
  //     idx1++
  //   } else {
  //     idx2++
  //   }
    
  // }

  // const last = idx1 < nums1.length ? nums1 : nums2
  // let start = idx1 < nums1.length ? idx1 : idx2

  // for(let i = start; i < last.length; i++) {
  //   num[idx++] = last[i]
  // }

  // if (num.length % 2) {
  //   return num[Math.floor(num.length / 2)]
  // } else {
  //   const mid = num.length / 2
  //   return (num[mid - 1] + num[mid]) / 2
  // }

  // O(log(m + n))
  
};