from collections import deque
def solution(priorities, location):
    answer,max_num = 0,0
    max_list=list(sorted(priorities,reverse=True))
    prior = deque([[i,p] for i,p in zip(range(len(priorities)),priorities)])
    while True:
        if max_list[max_num]!=prior[0][1]: prior.append(prior.popleft())
        else:
            answer+=1
            if prior[0][0]==location: return answer
            else: prior.popleft(); max_num+=1