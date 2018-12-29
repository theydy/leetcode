const search = function (matrix, type = 'x', reverse = false) {
  return function (start, end, index) {
    let res = [];
    for (let i = start; i <= end; i++) {
      let item = type === 'x' ? matrix[index][i] : matrix[i][index];
      res.push(item);
    }
    if (reverse) {
      res.reverse();
    }
    return res;
  };
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let res = [];
  let m = matrix.length;
  let n = matrix[0] ? matrix[0].length : 0;
  let minX = 0, maxX = m ? m - 1 : 0;
  let minY = 0, maxY = n ? n - 1 : 0;
  const getTop = search(matrix);
  const getRight = search(matrix, 'y');
  const getBottom = search(matrix, 'x', true);
  const getLeft = search(matrix, 'y', true);

  while (res.length < m * n) {
    res.push(...getTop(minY, maxY, minX));
    res.push(...getRight(minX + 1, maxX - 1, maxY));
    (minX !== maxX) && res.push(...getBottom(minY, maxY, maxX));
    (minY !== maxY) && res.push(...getLeft(minX + 1, maxX - 1, minY));
    
    minX++;
    maxX--;
    minY++;
    maxY--;
  }
  return res;
};