def solution(n, t, m, p):
    def convert(l,n):
        T = "0123456789ABCDEF"
        q, r = divmod(l,n)
        if q == 0:  return T[r]
        else:   return convert(q,n) + T[r]      
    answer,l = '',0
    while len(answer)<=m*(t-1)+p:
        answer+=convert(l,n)
        l+=1
    answer=[a for i,a in zip(range(len(answer)),answer) if i%m==((p-1)%m)]
    return ''.join(answer)[:t]
    #n진법으로 계산, 총 t개 나오게
    #m으로 나눈 나머지가 p일 때 t에 추가