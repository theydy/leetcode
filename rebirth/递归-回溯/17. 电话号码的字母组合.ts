function letterCombinations(digits: string): string[] {
  const map = new Map<string, string[]>([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ]);

  const res: string[] = [];
  const dfs = (index: number = 0, path: string = '') => {
    if (index >= digits.length) {
      return;
    }

    const chars = map.get(digits[index]);

    chars.map(char => {
      if (index === digits.length - 1) {
        res.push(path + char);
      }

      dfs(index + 1,  path + char);
    });
  };

  dfs();

  return res;
};