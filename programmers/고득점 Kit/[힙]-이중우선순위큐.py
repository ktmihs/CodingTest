def solution(operations):
    Q=[]
    for oper in operations:
        if oper[0]=='I': Q.append(int(oper[2:]))
        elif oper=='D -1' and len(Q): Q.remove(min(Q))
        elif oper=='D 1' and len(Q): Q.remove(max(Q))
    if len(Q): return [max(Q),min(Q)]
    else: return [0,0]