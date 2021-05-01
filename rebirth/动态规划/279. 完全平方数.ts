function numSquares(n: number): number {
  const dp: number[] = [0, 1, 2];
  const spuares: number[] = [];

  for (let i = 1; i * i <= n; i++) {
    spuares.push(i * i);
  }
  
  for(let i = 3; i <= n; i++) {
    dp[i] = i;
    for(let j = 0; j < spuares.length; j++) {
      if (n - spuares[j] < 0) continue;
      dp[i] = Math.min(1 + dp[n - spuares[j]], dp[i]);
    }
  }

  return dp[n];
};