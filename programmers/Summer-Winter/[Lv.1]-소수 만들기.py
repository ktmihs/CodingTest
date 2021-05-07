from itertools import combinations as comb
def is_prime(num):
    for i in range(3,num,2):
        if num % i==0: return 0
    return 1
def solution(nums):
    answer = 0
    temp=[sum(com) for com in list(comb(nums,3)) if sum(com)%2!=0]
    for t in temp: answer+=is_prime(t)
    return answer