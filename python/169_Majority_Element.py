'''
    Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

    You may assume that the array is non-empty and the majority element always exist in the array.

'''


class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        dic = {}
        numsTime = (len(nums) % 2) + (len(nums) / 2)
        for x in nums:
            if dic.get(x) is not None:
                dic[x] += 1
            else:
                dic[x] = 1
            if dic[x] >= numsTime:
                return x
