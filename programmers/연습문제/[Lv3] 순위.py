def solution(n, results):
    answer=0
    win,lose={i:set() for i in range(1,n+1)},{i:set() for i in range(1,n+1)}
    for W,L in results: win[W].add(L); lose[L].add(W)   # 이기고 진 정보 정리
    for i in range(1,n+1):  # a에게 이긴 선수는 a에게 진 선수에게도 이김(졌을 때도 동일)
        for v in win[i]: lose[v].update(lose[i]) 
        for v in lose[i]: win[v].update(win[i])
    for i in range(1,n+1):
        if len(win[i])+len(lose[i])==n-1: answer+=1 # 이긴 횟수+진 횟수가 전부 나온다면
    return answer