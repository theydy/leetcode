const search = function (matrix, type = 'x', reverse = false) {
  return function (start, end, index, num) {
    let j = num;
    if (reverse) {
      for (let i = end; i >= start; i--) {
        if (type === 'x') {
          matrix[index][i] = j;
        } else {
          matrix[i][index] = j;
        }
        j++;
      }
    } else {
      for (let i = start; i <= end; i++) {
        if (type === 'x') {
          matrix[index][i] = j;
        } else {
          matrix[i][index] = j;
        }
        j++;
      }
    }
    return j;
  };
}

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }
  let num = 1;
  let minX = 0, maxX = n - 1;
  let minY = 0, maxY = n - 1;
  const getTop = search(matrix);
  const getRight = search(matrix, 'y');
  const getBottom = search(matrix, 'x', true);
  const getLeft = search(matrix, 'y', true);

  while (num <= n*n) {
    num = getTop(minY, maxY, minX, num);
    num = getRight(minX + 1, maxX - 1, maxY, num);
    (minX !== maxX) && (num = getBottom(minY, maxY, maxX, num));
    (minY !== maxY) && (num = getLeft(minX + 1, maxX - 1, minY, num));
    
    minX++;
    maxX--;
    minY++;
    maxY--;
  }
  return matrix;
};