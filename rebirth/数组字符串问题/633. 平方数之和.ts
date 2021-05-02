function judgeSquareSum(c: number): boolean {
  const list: number[] = [];
  for(let i = 0; i * i <= c; i++) {
    list.push(i * i);
  }

  let l = 0, r = list.length - 1;

  while(l <= r) {
    if (list[l] + list[r] === c) return true;
    else if (list[l] + list[r] < c) {
      l++;
    } else {
      r--;
    }
  }

  return false;
};