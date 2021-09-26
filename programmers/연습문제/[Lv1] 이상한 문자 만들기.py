def solution(s):
    answer,num = '',0
    while s:
        if s[0]==' ':
            answer += s[0]
            num=0
        else:
            if num%2 == 0: answer += s[0].upper()
            else: answer += s[0].lower()
            num+=1
        s=s[1:]
    return answer