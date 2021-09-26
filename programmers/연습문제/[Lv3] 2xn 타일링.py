def solution(n):
    pre1,pre2=1,1
    for i in range(3, n+1): pre1,pre2=pre2,pre1+pre2
    return (pre1+pre2)%1000000007