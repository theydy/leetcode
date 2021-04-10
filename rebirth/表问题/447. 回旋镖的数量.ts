function numberOfBoomerangs(points: number[][]): number {
  let result = 0;

  points.map(([x1, y1]) => {
    const map = new Map<number, number>();
    points.map(([x2, y2]) => {
      if (x1 !== x2 || y1 !== y2) {
        const val = Math.pow(y1 - y2, 2) + Math.pow(x1 - x2, 2);
        map.set(val, (map.get(val) || 0) + 1);
      }
    });

    for(const value of map.values()) {
      value > 1 && (result += value * (value -1));
    }
  });

  return result;
};