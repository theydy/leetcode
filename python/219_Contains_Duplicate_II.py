'''
    Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j]
    and the difference between i and j is at most k.

'''


class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        dic = {}
        for i, x in enumerate(nums):
            if dic.get(x) is not None:
                val = i - dic[x]
                if val <= k:
                    return True
            dic[x] = i
        return False
