/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  /**
   * a, b, c, d
   * ac bd -> ab cd, ad bc
   * ad bc -> ab cd
   */
  var [a, b, c, d] = [p1, p2, p3, p4];
  var pow2 = function (x) {
    return Math.pow(x, 2);
  };
  var edge = function (a, b) {
    return pow2(a[0] - b[0]) + pow2(a[1] - b[1]);
  };
  var deg90 = function (a, b, c) {
    return (a + b) === c;
  };
  var equal = function (a, b) {
    return a === b && a > 0 && b > 0;
  }
  var ab = edge(a, b);
  var ac = edge(a, c);
  var ad = edge(a, d);
  var bc = edge(b, c);
  var bd = edge(b, d);
  var cd = edge(c, d);

  var allCondition = [
    [equal(ac, bd), equal(bd, ab), equal(ab, cd), equal(cd, ac), deg90(ac, cd, ad), deg90(ab, bd, ad)],
    [equal(ac, bd), equal(bd, ad), equal(ad, bc), equal(bc, ac), deg90(ac, bc, ab), deg90(ad, bd, ab)],
    [equal(ad, bc), equal(bc, ab), equal(ab, cd), equal(cd, ad), deg90(ad, cd, ac), deg90(ab, bc, ac)],
  ];
  var res =  allCondition.map(item => item.reduce((acc, x) => acc && x, true));
  return res.reduce((acc, x) => acc || x, false);
};
