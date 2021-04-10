function groupAnagrams(strs: string[]): string[][] {
  const formatList: string[] = [];
  strs.map(str => {
    const map = new Map<string, number>();

    str.split('').map(char => {
      map.set(char, (map.get(char) || 0) + 1);
    })

    const keyValueList: string[] = [];
    for (const [key, value] of map.entries()) {
      keyValueList.push(`${key}${value}`);
    }

    formatList.push(keyValueList.sort().join(''));

  })

  const result = new Map<string, string[]>();

  formatList.map((key, index) => {
      const val = (result.get(key) || []);
      val.push(strs[index]);
      result.set(key, val);
  })

  return [...result.values()];
};