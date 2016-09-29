'''
    Given a non-negative number represented as an array of digits, plus one to the number.

    The digits are stored such that the most significant digit is at the head of the list.

'''


class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        s = ""
        for i in digits:
            s += str(i)
        s = str(int(s)+1)
        result = [int(x) for x in s]
        return result
