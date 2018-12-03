var search = function(queue, start, end, bank, step) {
  var val = ['A', 'C', 'G', 'T'];
  for (var i in start) {
      var substring = [...val];
      substring.splice(substring.indexOf(start[i]), 1);
      for (var j in substring) {
          var s = start.slice(0, i) + substring[j] + start.slice(parseInt(i) + 1);
          if (bank.indexOf(s) > -1) {
            if (s === end) {
              return true;
            } else {
              queue.push({
                val: s,
                step: ++step
              });
              bank.splice(bank.indexOf(s), 1);
            }
          }
      }
  }
};

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  var queue = [{
    val: start,
    step: 0
  }];
  while(queue.length) {
      var item = queue.shift();
      var curr = item.val;
      var step = item.step;
      var res = search(queue, curr, end, bank, step);
      if (res) {
          return ++step;
      }
  }
  return -1;
};
