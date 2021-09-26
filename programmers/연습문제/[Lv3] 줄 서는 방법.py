def solution(n, k):
    answer, fac = [], [1]
    num=[i for i in range(1,n+1)]
    for i in range(2,n): fac.append(fac[-1]*i)
    while fac:
        d,v=divmod(k,fac.pop())
        if v==0: d-=1
        answer.append(num[d])
        del num[d]
        k=v
    return answer+num