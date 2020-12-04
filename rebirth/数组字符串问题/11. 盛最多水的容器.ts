function maxArea(height: number[]): number {
  let res = 0;
  let l = 0, r = height.length - 1;

  const getArea = (l: number, r: number) => {
    return Math.min(height[l], height[r]) * Math.abs(l - r);
  }

  while(l < r) {
    const area = getArea(l, r);

    if (area > res) res = area;

    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }

  return res;
};