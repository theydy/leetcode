/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {};
  let curr = 0,
      res = 0;
  nums.map(item => {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
    
    if (map[item] > curr) {
      curr = map[item];
      res = item;
    }
  })
  return res;
};