'''
    Given numRows, generate the first numRows of Pascal's triangle.

'''


class Solution(object):
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        result = []
        self.col_generate(numRows, result)
        return result

    def col_generate(self, row, result):
        if row <= 0:
            pass
        elif row == 1:
            result.append([1])
        else:
            self.col_generate(row - 1, result)
            col = []
            end = len(result[-1]) + 1
            for i in range(end):
                if i == 0 or i == end - 1:
                    col.append(1)
                else:
                    col.append(result[-1][i-1] + result[-1][i])
            result.append(col)
        