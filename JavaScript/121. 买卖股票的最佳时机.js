/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Infinity;
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    if (prices[i] > min) {
      res = Math.max(res, prices[i] - min);
    }
  }
  return res;
};