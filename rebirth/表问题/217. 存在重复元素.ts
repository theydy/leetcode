function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();

  for(let i = 0; i < nums.length; i++) {
    set.add(nums[i]);

    if (set.size !== i + 1) {
      return true;
    }
  }

  return false;
};