def solution(nums):
    answer = [nums[i]+nums[j] for i in range(len(nums)) for j in range(i+1,len(nums))]
    return sorted(list(set(answer)))