def binary(n):
    T='01'
    q,r=divmod(n,2)
    if q==0:return T[r]
    else: return binary(q)+T[r]
def solution(s):
    answer=1
    num, tmp = s.count('1'), s.count('0')
    while num!=1:
        s=binary(num)
        tmp+=str(s).count('0')
        num=s.count('1')
        answer+=1
    return answer,tmp