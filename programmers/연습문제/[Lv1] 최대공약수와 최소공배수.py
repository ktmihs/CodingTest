def solution(n, m):
    x,y=n,m
    while y: x,y=y,x%y
    return [x, n*m//x]