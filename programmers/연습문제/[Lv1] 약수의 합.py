def solution(n):
    answer=0
    if n<2: return n
    for i in range(1,int(n**0.5)+1):
        if i==n**0.5: answer+=i
        elif n%i==0: answer+=i+n/i
    return answer