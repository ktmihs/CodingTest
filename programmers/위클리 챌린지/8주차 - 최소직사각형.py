def solution(sizes):
    return max(sum(sizes,[]))* max([min(i,j) for i,j in sizes])