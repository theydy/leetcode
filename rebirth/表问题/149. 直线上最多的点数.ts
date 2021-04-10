function maxPoints(points: number[][]): number {
  let result = 1;

  const gcd = (a: number, b: number): number => {
    return !b ? a : gcd(b, a % b);
  }

  points.map(([x1, y1]) => {
    const map = new Map<string, number>();

    points.map(([x2, y2]) => {
      if (x1 !== x2 || y1 !== y2) {
        const x = x1 - x2;
        const y = y1 - y2;
        const temp = gcd(x, y);
        const k = `${y / temp}/${x / temp}`;
      
        map.set(k, (map.get(k) || 1) + 1);
      }
    })
    
    result = Math.max(...[...map.values(), result]);
  })
  return result;
};