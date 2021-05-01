function numIslands(grid: string[][]): number {
  const directs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const xL = grid.length;
  const yL = grid[0].length;
  let ans = 0;

  const dfs = (cx: number, cy: number) => {
    const target = grid[cx][cy];

    if (target === '0') return;

    grid[cx][cy] = '0';

    for(let i = 0; i < directs.length; i++) {
      const x = cx + directs[i][0];
      const y = cy + directs[i][1];

      if (
        x >= 0 && x < xL &&
        y >= 0 && y < yL && 
        grid[x][y] === '1'
      ) {
        dfs(x, y);
      }
    }
  }

  for(let i = 0; i < xL; i ++) {
    for(let j = 0; j < yL; j++) {
      if (grid[i][j] === '1') {
        ans++;
        dfs(i, j);
      }
    }
  }

  return ans;
};