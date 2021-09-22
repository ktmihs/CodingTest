def solution(d, budget):
    answer = 0
    for i in sorted(d):
        budget-=i
        if budget >= 0: answer+=1
        else: break
    return answer