function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set = new Set<number>();

  let start = 0;

  for(let i = 0; i < nums.length;) {
    if (i - start > k) {
      set.delete(nums[start]);
      start++;
    }

    if (set.has(nums[i])) {
      return true;
    }

    set.add(nums[i]);
    i++;
  }

  return false;
};