'''
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution.

'''


class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i, x in enumerate(nums):
            y = target - x
            if y in nums:
                j = nums.index(y)
                if i != j:
                    return [i, j]
                elif nums.count(x) > 1:
                    nums.remove(x)
                    j = nums.index(x) + 1
                    return [i, j]
