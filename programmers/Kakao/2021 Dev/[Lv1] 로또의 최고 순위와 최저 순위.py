def solution(lottos, win_nums):
    lottos=list(filter((0).__ne__, lottos))
    return [min(6,len(set(lottos+win_nums))-5),min(6,len(set(lottos+win_nums))+1-len(lottos))]