def func(n):
    if bin(n)[-1]=='0': return n+1
    tmp=bin(n)[:1:-1]+'0'
    m=tmp.replace('10','01',1)
    return int(m[::-1],2)
def solution(numbers):
    answer = []
    for number in numbers: answer.append(func(number))
    return answer