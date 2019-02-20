const singleMultip = (a, b) => {
  const num1 = parseInt(a);
  const num2 = b.split('').reverse();
  const res = [];
  let up = 0;
  num2.map(i => {
    let value = parseInt(i) * num1 + up;
    up = parseInt(value / 10);
    res.push(String(value % 10));
  });
  up && res.push(String(up));
  return res.reverse().join('');
}

const add = (a, b) => {
  const num1 = a.split('').reverse();
  const num2 = b.split('').reverse();
  const res = [];
  let up = 0;
  for (let i  = 0; i < num1.length || i < num2.length; i++) {
    let value = parseInt(num1[i] || 0) + parseInt(num2[i] || 0) + up;
    up = parseInt(value / 10);
    res.push(String(value % 10));
  }
  up && res.push(String(up));
  return res.reverse().join('');
}


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  let res = '', pre = '';
  let last = '';
  num1.split('').reverse().map(i => {
    let value = singleMultip(i, num2) + last;
    last += '0';

    res.length && (pre = value) || (res = value);
    if (pre.length && res.length) {
      res = add(pre, res);
    }
  })
  return res;
};