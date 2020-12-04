function twoSum(numbers: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const val = numbers[i];
    const t = target - val;

    if (map.has(t)) {
      return [map.get(t)!, i]
    }
    map.set(val, i);
  }

  return [];
};