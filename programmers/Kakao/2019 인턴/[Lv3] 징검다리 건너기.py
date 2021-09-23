def solution(stones, k):    # 이분 탐색
    def func(L,R):
        if L>=R-1: return R # 더 작아질 수 없는 경우 R return
        tmp,mid=0,(L+R)//2 
        for stone in stones:
            if tmp==k: break    # mid명이 징검다리를 건널 수 없는 경우
            tmp = tmp+1 if stone-mid<=0 else 0
        if tmp==k: return func(L,mid)   # 인원을 줄여서 검사
        else: return func(mid,R)    # 충분히 건넌다면 인원을 늘려서 검사
    if k==1: return min(stones)
    return func(1,max(stones))  # L=1, R=max(stones)에서 시작

#idea
#def solution(stones, k):
#    tmp=[]
#    for i in range(len(stones)-k+1):
#        tmp.append(max(stones[i:i+k]))
#    return min(tmp)