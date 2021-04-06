function checkValidString(s: string): boolean {
  let left = 0;
  let right = 0;

  for(let i = 0; i < s.length; i++) {
    left += s[i] === ')' ? -1 : 1;
    right += s[s.length - 1 - i] === '(' ? -1 : 1;

    if (left < 0 || right < 0) return false;
  }
  return true;
};