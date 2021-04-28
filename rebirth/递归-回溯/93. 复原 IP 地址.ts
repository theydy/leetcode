function restoreIpAddresses(s: string): string[] {
  const res: string[] = [];
  if (s.length > 12) return res;

  const dfs = (dot: number = 0, index: number = 0, path: string = '') => {
    if (dot >= 4) return;

    for(let i = index + 1; i <= index + 3; i++) {
      // 0 开头，多位直接跳过
      if (i !== index + 1 && s[index] === '0') continue;

      const bit = s.slice(index, i);

      if (parseInt(bit) <= 255) {
        if (dot === 3 && i === s.length) {
          res.push((path + '.' + bit).slice(1));
        }
        dfs(dot + 1, i, path + '.' + bit);
      }

    }

  }

  dfs();

  return res;
};