def solution(A, B):
    answer,B=0,sorted(B)
    if min(A) >= max(B): return answer
    for a in sorted(A):
        if not len(B): break
        while B:
            if a < B.pop(0): answer+=1; break
    return answer