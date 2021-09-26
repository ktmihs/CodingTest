def solution(n):
    q,r=divmod(n,3)
    if r==0: q,r=q-1,4
    if q==0: return str(r)
    else: return solution(q)+str(r)