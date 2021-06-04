function shortestToChar(s: string, c: string): number[] {
  const answer = new Array<number>(s.length).fill(0);
  const cIndex: number[] = [];

  for(let i = 0; i < s.length; i++) {
    if (cIndex.length) {
      answer[i] = i - cIndex[cIndex.length - 1];
    }

    if (s[i] === c) {
      const start = cIndex.length ? cIndex[cIndex.length - 1] : 0;

      const right = i;
      const left = cIndex.length ? start : -Infinity;
      
      for(let j = start; j <= i; j++) {
        answer[j] = Math.min(right - j, j - left);
      }
      cIndex.push(i);
    }
  }
  return answer;
};