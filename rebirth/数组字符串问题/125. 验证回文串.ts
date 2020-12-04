function isPalindrome(s: string): boolean {
  if (!s) return true;

  let l = 0, r = s.length - 1;

  const reg = /[a-z0-9]/;

  const getCharAt = (s: string, i: number) => {
    return s.charAt(i).toLowerCase();
  }

  while(l < r) {

    while(l < r && !getCharAt(s, l).match(reg)) {
      l++;
    }

    while(r > l && !getCharAt(s, r).match(reg)) {
      r--;
    }

    if (getCharAt(s, l) !== getCharAt(s, r)) return false;

    l++;
    r--;
  }

  return true;
};