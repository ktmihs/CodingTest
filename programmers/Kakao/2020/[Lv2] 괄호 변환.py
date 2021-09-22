def bal(p): return p.count('(')==p.count(')')
def corr(p):
    cnt=0
    for i in range(len(p)):
        if p[i] == '(': cnt+=1
        else: cnt-=1
        if cnt<0: return False
    return True
def solution(p):
    u,v=[],[]
    if corr(p): return p
    for i in range(2, len(p)+1,2):
        if bal(p[:i]):
            u,v=p[:i],p[i:]
            break
    if corr(u): return u + solution(v)
    else: return '('+solution(v)+')' + u[1:len(u)-1].replace('(','#').replace(')','(').replace('#',')')