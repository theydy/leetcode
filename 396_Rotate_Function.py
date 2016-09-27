'''
    Given an array of integers A and let n to be its length.

    Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:

    F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].

    Calculate the maximum value of F(0), F(1), ..., F(n-1).

'''


class Solution(object):
    def maxRotateFunction(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        length = len(A)
        sumA = sum(A)
        value = sum([i*x for i, x in enumerate(A)])
        max_value = value

        for i in range(length):
            value = value + sumA - A[length - i - 1] * length
            max_value = max(max_value, value)

        return max_value
