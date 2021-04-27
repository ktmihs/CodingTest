def solution(n, lost, reserve):
    answer, std=0, [0]*n
    lost.sort(), reserve.sort()
    for i in range(n):
        if len(lost) and i+1 == lost[0]:
            std[i]-=1
            del lost[0]
        if len(reserve) and i+1 == reserve[0]:
            std[i]+=1
            del reserve[0]
    for i in range(n):
        if std[i] < 0:
            if i > 0 and std[i-1] > 0:
                std[i]+=1
                std[i-1]-=1
            elif i+1 < len(std) and std[i+1] > 0:
                std[i]+=1
                std[i+1]-=1
    for i in range(n):
        if std[i] < 0: answer+=1
    if answer == 0: return n
    else: return n-answer