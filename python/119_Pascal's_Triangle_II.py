'''
    Given an index k, return the kth row of the Pascal's triangle.

    For example, given k = 3,
    Return [1,3,3,1].

    Note:
    Could you optimize your algorithm to use only O(k) extra space?

'''


class Solution(object):
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        result = []
        self.col_generate(rowIndex, result)
        return result

    def col_generate(self, row, result):
        if row == 0:
            result.append(1)
        else:
            self.col_generate(row - 1, result)
            end = len(result) + 1
            x, y = 0, 0
            for i in range(1, end):
                if i == end - 1:
                    result.append(1)
                else:
                    x, y = result[i-1] - x, result[i]
                    result[i] = x + y
