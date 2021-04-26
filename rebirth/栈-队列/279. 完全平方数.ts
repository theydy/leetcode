
type NodeType = { count: number, val: number };

function createListNode(count: number, val: number): NodeType {
  return { count, val };
}

function numSquares(n: number): number {
  const list: NodeType[] = [createListNode(0, n)];
  const spuares: number[] = [];
  const visited = new Array(n + 1).fill(false);

  let res = n;
  
  for (let i = 1; i * i <= n; i++) {
    spuares.push(i * i);
  }

  visited[n] = true;

  while(list.length) {
    const { count, val: n } = list.shift();

    if (count + 1 >= res) continue;

    for(let i = 0; i < spuares.length; i++) {
      const val = n - spuares[i];
      
      if (val > 0) {
        if (!visited[val]) {
          list.push(createListNode(count + 1, val));
          visited[val] = true;
        }
        continue;
      }
      
      if (val === 0) {
        return Math.min(count + 1, res);
      }

      break;
    }
  }

  return res;
};