function countPrimes(n: number): number {
  const table = new Array(n).fill(1);
  let ans = 0;

  for(let i = 2; i < n; i++) {
    if(table[i]) {
      ans++;
      
      for(let j = i + i; j < n; j += i) {
        table[j] = 0;
      }
    }
  }

  return ans;
};