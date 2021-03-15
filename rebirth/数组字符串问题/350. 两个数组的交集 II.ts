function intersect(nums1: number[], nums2: number[]): number[] {
  const mapping = new Map<number, number>();
  const res = [];
  nums1.map(num => {
    const times = mapping.get(num) || 0;
    mapping.set(num, times + 1);
  });
  nums2.map(num => {
    const times = mapping.get(num);
    if (times) {
      res.push(num);
      mapping.set(num, times - 1);
    }
  })

  return res;
};