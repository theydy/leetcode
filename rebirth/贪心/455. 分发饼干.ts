function findContentChildren(g: number[], s: number[]): number {
  let ng = g.slice().sort((a, b) => a - b);
  let ns = s.slice().sort((a, b) => a - b);

  let res = 0;

  while(ng.length && ns.length) {
    if (ng[0] <= ns[0]) {
      res++;
      ng.shift();
      ns.shift();
    } else {
      ns.shift();
    }
  }

  return res;
};