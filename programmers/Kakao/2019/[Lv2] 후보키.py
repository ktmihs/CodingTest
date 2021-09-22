from collections import deque
from itertools import combinations
def solution(relation):
    n_row,n_col = len(relation), len(relation[0])  
    candidates,final=[],[]
    for i in range(1,n_col+1):
        candidates.extend(combinations(range(n_col),i)) # column 전체부분집합 수(가능한 후보키 종류 모두 찾음)
    for keys in candidates:
        # 가능한 후보키에 대해 데이터를 넣어 모두 다른지(=후보키) 확인
        tmp=[tuple([item[key] for key in keys]) for item in relation]
        if len(set(tmp))==n_row: final.append(keys) # 후보키일 경우에만
    answer=set(final[:])
    for i in range(len(final)):
        for j in range(i+1,len(final)): # intersection == 교집합
            if len(final[i])==len(set(final[i]).intersection(set(final[j]))):
                answer.discard(final[j])    # remove()와 같은 기능(항목 없어도 됨)
    return len(answer)