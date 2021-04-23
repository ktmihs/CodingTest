import collections
def solution(clothes):
    answer = []
    total=1
    for i in range(len(clothes)):
        answer.append(clothes[i][1])
    dic=dict(collections.Counter(answer))
    for value in dic.values():
        total*=(int(value)+1)
    return total-1