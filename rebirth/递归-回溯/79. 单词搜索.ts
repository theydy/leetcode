function exist(board: string[][], word: string): boolean {
  const directs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const lengthX = board.length;
  const lengthY = board[0].length;
  const map: boolean[][] = [];

  board.map((_, index) => {
    map[index] = [];
  });

  let ans = false;

  const dfs = (startX: number, startY: number, index: number, cur: string) => {
    if (cur.length > word.length || ans) return;

    if (cur === word) {
      ans = true;
      return;
    }

    for(let i = 0; i < directs.length; i++) {

      const x = startX + directs[i][0];
      const y = startY + directs[i][1];

      if (
        x >= 0 && x < lengthX && 
        y >= 0 && y < lengthY && 
        !map[x][y]
      ) {
        const char = board[x][y];

        if (char === word[index + 1]) {
          map[x][y] = true;
          dfs(x, y, index + 1, cur + char);
          map[x][y] = false;
        }

      }
    }

  };

  for(let i = 0; i < lengthX; i++) {
    for(let j = 0; j < lengthY; j++) {
      if (board[i][j] === word[0]) {
        map[i][j] = true;
        dfs(i, j, 0, board[i][j]);
        map[i][j] = false;
      }

      if (ans) return true;
    }
  }

  return ans;
};