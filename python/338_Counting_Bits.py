"""
    Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

    Example:
    For num = 5 you should return [0,1,1,2,1,2].
"""


class Solution(object):
    def countBits(self, num):
        """
        :type num: int
        :rtype: List[int]
        """
        result = [0 for i in range(num+1)]
        for i in range(num+1):
            result[i] = result[i >> 1]
            if i % 2 == 1:
                result[i] += 1
        return result
