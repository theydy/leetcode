let binarySearch = function (target, list) {
  return function (left, right, fn) {
    let l = left,
        r = right,
        mid = Math.floor((l  + r) / 2);
    if (l > r) {
      return -1;
    }
    if (list[mid] === target) {
      return mid;
    }
    if (list[l] < list[r]) {
      // 传统二分
      return target > list[mid]
             ? fn(mid + 1, r, fn) :
             fn(l, mid - 1, fn)
    } else if (list[mid] > list[l]) {
      // list[l] - list[mid - 1] 有序
      return target >= list[l] && target <= list[mid - 1] 
             ? fn(l, mid - 1, fn) :
             fn(mid + 1, r, fn);
    } else {
      // list[mid + 1] - list[r] 有序
      return target >= list[mid + 1] && target <= list[r]
             ? fn(mid + 1, r, fn) :
             fn(l, mid - 1, fn);
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let func = binarySearch(target, nums);
  return func(0, nums.length - 1, func);
};