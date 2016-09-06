"""
    The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

    P   A   H   N
    A P L S I I G
    Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"
    Write the code that will take a string and make this conversion given a number of rows:

    string convert(string text, int nRows);
    convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
"""


class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        result = ["" for i in range(numRows)]
        flag = 1
        j = 0
        for i in s:
            if flag:
                result[j] += i
                j += 1
                if j == numRows:
                    flag = 0
                    j -= 2
            else:
                result[j] += i
                j -= 1
                if j < 0:
                    flag = 1
                    j += 2
        return "".join(result)
