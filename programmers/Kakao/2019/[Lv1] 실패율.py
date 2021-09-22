from collections import Counter
def solution(N, stages):
    answer = []
    total=len(stages)
    stages=dict(Counter(stages))
    for n in range(1,N+1):
        if n in stages:
            answer.append((stages[n]/total,n))
            total-=stages[n]
        else:
            answer.append((0,n))
    answer=sorted(answer,key=lambda x :(-x[0],x[1]))
    return [i[1] for i in answer]

    #(해당 숫자의 개수 / 해당 숫자 이상의 개수)
    #if 해당 숫자의 개수==0: return 0 => 실패율
    #실패율은 내림차순, 같다면 스테이지 번호 올림차순(sort())
    #for문 돌릴 때 N+1로 계산