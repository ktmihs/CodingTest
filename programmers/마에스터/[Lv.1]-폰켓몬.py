def solution(nums):
    if len(nums)//2 >len(set(nums)): return len(set(nums))
    else: return len(nums)//2