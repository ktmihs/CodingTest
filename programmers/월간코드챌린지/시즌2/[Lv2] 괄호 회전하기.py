def solution(s):
    answer = 0
    if len(s)%2==1: return 0
    dic={'[':']','{':'}','(':')'}
    dic_rev={']':'[','}':'{',')':'('}
    for _ in range(len(s)):
        stack=[]
        for i in s:
            if i in dic: stack.append(i)
            elif stack and dic_rev[i] == stack[-1]: del stack[-1]
            else: stack.append(i)
        if not stack: answer+=1
        s=s[1:]+s[0]
    return answer