/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = [];
  this.length = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  debugger
  let lastMin = this.length > 0 ? this.min[this.length - 1] : Infinity;
  this.stack[this.length] = x;
  this.min[this.length] = Math.min(lastMin, x);
  this.length++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.length--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */