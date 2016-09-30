'''
    A peak element is an element that is greater than its neighbors.

    Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

    The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

    You may imagine that num[-1] = num[n] = -∞.

    For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.

'''


class Solution(object):
    def findPeakElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        for i, x in enumerate(nums):
            if len(nums) == 1:
                return 0
            elif i == 0:
                if x > nums[i + 1]:
                    return i
            elif i == len(nums) - 1:
                if x > nums[ i - 1]:
                    return i
            else:
                if nums[i - 1] < x > nums[i + 1]:
                    return i
