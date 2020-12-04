function reverseVowels(s: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const res = s.split('');
  const hasVowels = (s: string, i: number) => {
    return vowels.includes(s.charAt(i).toLowerCase());
  }

  let l = 0, r = s.length - 1;


  while( l < r) {
    while (l < r && !hasVowels(s, l)) {
      l++;
    }
    while (l < r && !hasVowels(s, r)) {
      r--
    }

    [res[l], res[r]] = [res[r], res[l]];

    l++;
    r--;

  }

  return res.join('');
};