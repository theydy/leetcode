function solveNQueens(n: number): string[][] {
  const res:string[][] = [];
  // 纵列是否冲突
  const col: boolean[] = new Array(n).fill(false);
  // 对角线1
  const dia1: boolean[] = new Array(2 * n - 1).fill(false);
  // 对角线2
  const dia2: boolean[] = new Array(2 * n - 1).fill(false);

  function generateBoard(n: number, row: number[]): string[] {
    const board: string[] = new Array(n).fill('.'.repeat(n));

    for(let i = 0; i < n; i++) {
      board[i] = board[i].slice(0, row[i]) + 'Q' + board[i].slice(row[i] + 1);
    }
    return board;
  }

  function putQueen(n: number, index: number, row: number[]) {
    if (index === n) {
      res.push(generateBoard(n, row));
      return;
    }

    for (let i = 0; i < n; i++) {
      // 尝试将第 index 行的皇后摆放在第 i 列
      if (!col[i] && !dia1[index + i] && !dia2[index - i + n - 1]) {
        row.push(i);
        col[i] = true;
        dia1[index + i] = true;
        dia2[index - i + n - 1] = true;

        putQueen(n, index + 1, row);

        row.pop();
        col[i] = false;
        dia1[index + i] = false;
        dia2[index - i + n - 1] = false;

      }
    }
  }

  putQueen(n, 0, []);

  return res;
};