/**
 * Initialize your data structure here.
 * @param {number} size
 */
 var MovingAverage = function(size) {
  // 每放进一个数，通过 list[1-size] 的合等于 average * list.length - list[0]
  this.size = size
  this.list = []
  this.average = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  const sum = this.average * this.list.length

  this.list.push(val)

  if (this.list.length > this.size) {
    this.average = (sum - this.list[0] + val) / this.size
    this.list.shift()
  } else {
    this.average = (sum + val) / this.list.length
  }

  return this.average
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */