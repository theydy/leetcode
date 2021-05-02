function numDecodings(s: string): number {
  if (s[0] === '0' || s.includes('00')) return 0;

  const dp = new Array(s.length + 1).fill(0);
  
  dp[0] = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }
    if (i > 1 && s[i - 2] != '0' && (parseInt(s[i - 2] + s[i - 1]) <= 26)) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
};