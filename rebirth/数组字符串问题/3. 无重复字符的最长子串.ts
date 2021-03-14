function lengthOfLongestSubstring(s: string): number {
  let l = 0;
  let r = -1;
  let res = 0;
  const map = new Map<string, number>();

  while(l < s.length) {
    if (r + 1 < s.length && !map.has(s[r + 1])) {
      map.set(s[++r], 1);
    } else {
      map.delete(s[l++]);
    }

    res = Math.max(res, r - l + 1);
  }
  return res;
};