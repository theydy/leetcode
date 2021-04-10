function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map = new Map<number, number>();
  let result = 0;

  for(let i = 0; i < nums1.length; i++) {
    for(let j = 0; j < nums2.length; j++) {
      const val = nums1[i] + nums2[j];

      if (map.has(val)) {
        map.set(val, map.get(val) + 1);
      } else {
        map.set(val, 1);
      }
    }
  }

  for(let i = 0; i < nums3.length; i++) {
    for(let j = 0; j < nums4.length; j++) {
      const val = -(nums3[i] + nums4[j]);

      if (map.has(val)) {
        result += map.get(val);
      }
    }
  }

  return result;
};