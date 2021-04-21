function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  const n = nums.length;
  const map = new Map<number, number>();

  const getID = (x, w) => {
    return x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w);
  }

  for(let i = 0; i < n; i++) {
    const x = nums[i];
    const id = getID(x, t + 1);

    if (map.has(id)) return true;

    const cd1 = map.has(id - 1) && Math.abs(x - map.get(id - 1)) <= t;
    const cd2 = map.has(id + 1) && Math.abs(x - map.get(id + 1)) <= t;
    if (cd1 || cd2) return true;

    map.set(id, x);

    if (i >= k) {
      map.delete(getID(nums[i - k], t + 1));
    }
  }

  return false;
};