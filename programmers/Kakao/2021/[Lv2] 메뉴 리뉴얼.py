from collections import Counter
from itertools import combinations as cmb
def solution(orders, course):
    answer = []
    for c in course:
        tmp=Counter([''.join(sorted(i)) for o in orders for i in list((cmb(o,c)))])
        num=sorted(tmp.values())
        if len(tmp)==0 or num[-1]<2: continue
        for k,v in tmp.items():
            if v==num[-1]: answer.append(k)
    return sorted(answer)