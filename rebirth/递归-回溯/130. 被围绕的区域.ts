/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const directs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const xL = board.length;
  const yL = board[0].length;
  const vis: boolean[][] = [];

  board.map((_, index) => (vis[index] = []));

  const dfs = (cx: number, cy: number) => {
    const target = board[cx][cy];

    if (target === 'X') return;

    vis[cx][cy] = true;

    for(let i = 0; i < directs.length; i++) {
      const x = cx + directs[i][0];
      const y = cy + directs[i][1];

      if (
        x >= 0 && x < xL &&
        y >= 0 && y < yL && 
        board[x][y] === 'O' &&
        !vis[x][y]
      ) {
        dfs(x, y);
      }
    }
  }

  // 找四条边，如果是 O，进 dfs 找相连的 O，标记为不可变
  for(let i = 0; i < xL; i++) {
    if (board[i][0] === 'O') {
      vis[i][0] = true;
      dfs(i, 0);
    }
    if (board[i][yL - 1] === 'O') {
      vis[i][yL - 1] = true;
      dfs(i, yL - 1);
    }
  }

  for(let i = 0; i < yL; i++) {
    if (board[0][i] === 'O') {
      vis[0][i] = true;
      dfs(0, i);
    }
    if (board[xL - 1][i] === 'O') {
      vis[xL - 1][i] = true;
      dfs(xL - 1, i);
    }
  }

  // 最后遍历 board 把没有标记的地方全置为 X
  for(let i = 0; i < xL; i++) {
    for(let j = 0; j < yL; j++) {
      !vis[i][j] && (board[i][j] = 'X');
    }
  }
};