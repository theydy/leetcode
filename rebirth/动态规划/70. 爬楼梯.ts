function climbStairs(n: number): number {
  let j = 1, k = 2, temp;

  if (n == 1) return j;
  if (n === 2) return k;

  for(let i = 3; i <= n; i++) {
    temp = j + k;
    j = k;
    k = temp;
  }

  return temp;
};