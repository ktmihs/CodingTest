def solution(x, n):
    answer=[]
    while len(answer)!=n: answer.append(x*(len(answer)+1))
    return answer