'''
    Given a m x n grid filled with non-negative numbers, find a path from top left to bottom
    right which minimizes the sum of all numbers along its path.

    Note: You can only move either down or right at any point in time.

'''


class Solution(object):
    def minPathSum(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        pathMap = []
        m = len(grid)
        n = len(grid[0])
        for i in range(m):
            pathMap.append([0]*n)
        for i in range(m):
            for j in range(n):
                if i != 0 and j != 0:
                    a = grid[i][j] + pathMap[i][j-1]
                    b = grid[i][j] + pathMap[i-1][j]
                    pathMap[i][j] = min(a, b)
                elif i == 0 and j == 0:
                    pathMap[i][j] = grid[i][j]
                elif i == 0 and j != 0:
                    pathMap[i][j] = grid[i][j] + pathMap[i][j-1]
                else:
                    pathMap[i][j] = pathMap[i-1][j] + grid[i][j]
        return pathMap[-1][-1]
