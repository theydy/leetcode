function intersection(nums1: number[], nums2: number[]): number[] {
  const mapping = new Map<number, number>();
  const res = new Set<number>();
  nums1.map(num => mapping.set(num, 1));
  nums2.map(num => {
    mapping.has(num) && res.add(num);
  })

  return [...res];
};