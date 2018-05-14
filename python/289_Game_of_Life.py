'''
    According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

    Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

    Any live cell with fewer than two live neighbors dies, as if caused by under-population.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by over-population..
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
    Write a function to compute the next state (after one update) of the board given its current state.

    Follow up: 
    Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
    In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

'''


class Solution(object):
    def gameOfLife(self, board):
        """
        :type board: List[List[int]]
        :rtype: void Do not return anything, modify board in-place instead.
        """
        n = len(board)
        m = len(board[0])
        newBoard = [[0] * (m + 2) for i in range(n + 2)]
        for i in range(1, n + 1):
            for j in range(1, m + 1):
                newBoard[i][j] = board[i - 1][j - 1]
        for i in range(n):
            for j in range(m):
                live = self.change(newBoard, i + 1, j + 1)
                if board[i][j] == 1:
                    if live < 2 or live > 3:
                        board[i][j] = 0
                    else:
                        board[i][j] = 1
                elif board[i][j] == 0 and live == 3:
                    board[i][j] = 1

    def change(self, point, x, y):
        value = 0
        for i in range(x - 1, x + 2):
            for j in range(y - 1, y + 2):
                value += point[i][j]
        return value - point[x][y]
