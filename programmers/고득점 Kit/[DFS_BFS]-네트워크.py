def solution(n, computers):
    answer, queue, v = 0, [], [0]*n
    while 0 in v:
        queue.append(v.index(0))
        while queue:
            now=queue.pop(0); v[now]=1
            for i in range(n):
                if v[i]==0 and computers[now][i]==1: queue.append(i)
        answer+=1
    return answer