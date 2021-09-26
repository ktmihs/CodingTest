def solution(n):
    p1,p2=1,1
    if n<3: return n
    for _ in range(n-2):p1,p2=p2,p1+p2
    return (p1+p2)%1234567