function threeSum(nums: number[]): number[][] {
  const map = new Map<number, number>()
  const res: number[][] = [], has = new Map<string, boolean>();

  nums.map(num => map.set(num, (map.get(num) || 0) + 1));

  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      const sum = 0 - nums[i] - nums[j];
      const target = [nums[i], nums[j], sum].sort();
      const key = target.join(',');

      map.set(nums[i], (map.get(nums[i]) || 0) -1);
      map.set(nums[j], (map.get(nums[j]) || 0) -1);

      if(map.get(sum) > 0 && !has.has(key)) {
        res.push(target);
        has.set(key, true);
      }

      map.set(nums[i], (map.get(nums[i]) || 0) + 1);
      map.set(nums[j], (map.get(nums[j]) || 0) + 1);
    }
  }

  return res;
};