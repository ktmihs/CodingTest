def t_to_t(n):
    T='012'
    q,r=divmod(n,3)
    if q==0: return T[r]
    else: return t_to_t(q)+T[r]
def solution(n):
    answer = 0
    temp = str(t_to_t(n))[::-1]
    for i in range(len(temp)):
        answer+=int(temp[-1-i])*(3**i)
    return answer