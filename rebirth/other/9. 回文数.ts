function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  
  const target = [];

  while(x) {
    const value = x % 10;
    x = Math.floor(x / 10);
    target.push(value);
  }

  let i = 0, j = target.length - 1;

  while(i < j) {
    if (target[i] === target[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
};