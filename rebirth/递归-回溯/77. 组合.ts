function combine(n: number, k: number): number[][] {
  const res: number[][] = [];

  const dfs = (start: number, cur: number[] = []) => {
    if (cur.length === k) {
      res.push(cur.slice());
      return;
    }

    for (let i = start; i <= n; i++) {
      cur.push(i);
      dfs(i + 1, cur);
      cur.pop();
    }
  }

  dfs(1);

  return res;
};