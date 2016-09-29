'''
    Say you have an array for which the ith element is the price of a given stock on day i.

    If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

'''


class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        value = []
        min_value = float("inf")
        for i in prices:
            if i > min_value:
                value.append(i - min_value)
            else:
                min_value = i
        return max(value) if value else 0
