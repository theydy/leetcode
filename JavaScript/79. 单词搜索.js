var isCanMove = function (item) {
  return !!item;
}

var getCurrentStr = function (path) {
  return path.join('');
}

var deepSearch = function (board, direct, path, word) {
  return function (i, j, fn) {
    var val = board[i] && board[i][j];
    if (isCanMove(val)) {
      board[i][j] = 0;
      path.push(val);
      if (
        path.length <= word.length &&
        val === word[path.length - 1]
      ) {
        if (path.length === word.length) {
          if (getCurrentStr(path) === word) {
            return true;
          }
          return false;
        }
        for (var z = 0; z < direct.length; z++) {
          var dir = direct[z];
          if (fn(i + dir[0], j + dir[1], fn)) {
            return true;
          }
        }
      }
      board[i][j] = val;
      path.pop();
    }
    return false;
  }
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  var direct = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];
  var path = [];
  var search = deepSearch(board, direct, path, word);
  for (var i = 0; i< board.length; i++) {
    for (var j = 0; j< board[i].length; j++) {
      if (search(i, j, search)) {
        return true;
      }
    }
  }
  return false;
};
