def solution(n, s):
    d,v=divmod(s,n)
    if d<1: return [-1]
    answer=[d]*n
    for i in range(1,v+1): answer[-i]+=1
    return answer