def solution(citations):
    return max([min(i+1,sorted(citations, reverse=True)[i]) for i in range(len(citations))])