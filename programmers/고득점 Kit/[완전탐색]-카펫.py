def solution(brown, yellow):
    for x in range(1,int(brown/2+2)-1):
        y=int(brown/2+2)-x
        if x*y==(brown+yellow): return [y,x]