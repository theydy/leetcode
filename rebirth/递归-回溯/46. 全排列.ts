function permute(nums: number[]): number[][] {
  const res: number[][] = [];

  const dfs = (allows: number[], cur: number[] = []) => {
    for (let i = 0; i < allows.length; i++) {
      const val = allows[i];

      if (allows.length === 1) {
        res.push([...cur, val]);
        return;
      }

      cur.push(val);
      dfs(allows.filter(i => i !== val), cur);
      cur.pop();
    }
  };

  dfs(nums);

  return res;
};